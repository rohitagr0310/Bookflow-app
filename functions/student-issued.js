const connection = require("./db-test.js");

exports.handler = async (event, context) => {
  try {
    const { userid, source } = JSON.parse(event.body);

    let tableName;
    let bookTable;

    // Determine the table name based on the source parameter
    if (source === "library") {
      tableName = "issued_library";
      bookTable = "library"; // Replace with the actual table name for books in the library
    } else if (source === "bookbank") {
      tableName = "issued_bb";
      bookTable = "bookbank"; // Replace with the actual table name for books in the book bank
    } else {
      // Handle an invalid or missing source parameter as needed
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid source parameter" })
      };
    }

    const issuedDate = await new Promise((resolve, reject) => {
      // Fetch history data
      connection.query(`SELECT * FROM ${tableName} WHERE user_id = ? LIMIT 50`, [userid], (error, queryresults) => {
        if (error) {
          console.error("Error fetching history data:", error);
          reject(error);
        } else {
          resolve(queryresults);
        }
      });
    });

    // Fetch book names
    const bookIds = issuedDate.map((row) => row.book_id);
    const bookNames = await new Promise((resolve, reject) => {
      connection.query(`SELECT accessionNumber, bookTitle FROM ${bookTable} WHERE accessionNumber IN (?)`, [bookIds], (error, queryresults) => {
        if (error) {
          console.error("Error fetching book names:", error);
          reject(error);
        } else {
          resolve(queryresults);
        }
      });
    });

    // Merge the history data with book names
    const issuedDateWithBookNames = issuedDate.map((row) => {
      const book = bookNames.find((book) => book.accessionNumber === row.book_id);
      return {
        bookId: row.book_id,
        returnedDate: row.return_date,
        bookName: book ? book.bookTitle : "Unknown" // Use "Unknown" if book name is not found
      };
    });
    // Define a function to format a date object as "dd/mm/yyyy"
    function formatDate (date) {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }

    // Example history data with formatted dates
    const issuedDateWithFormattedDates = issuedDateWithBookNames.map((row) => ({
      ...row,
      issueDate: formatDate(new Date(row.issueDate)),
      returnedDate: formatDate(new Date(row.returnedDate))
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(issuedDateWithFormattedDates)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" })
    };
  }
};
