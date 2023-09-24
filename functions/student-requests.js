const connection = require("./db-test.js");

exports.handler = async (event, context) => {
  try {
    const { userid, requestType } = JSON.parse(event.body);

    let tableName;
    let bookTableName;

    // Determine the table names based on the requestType parameter
    if (requestType === "return") {
      tableName = "book_return_requests";
    } else if (requestType === "issue") {
      tableName = "book_issue_requests";
    } else {
      // Handle an invalid or missing requestType parameter as needed
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid requestType parameter" })
      };
    }

    let results;

    await new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${tableName} WHERE user_id = ? LIMIT 50`, [userid], (error, queryresults) => {
        if (error) {
          console.error(`Error fetching ${requestType} requests:`, error);
          reject(error);
        } else {
          results = queryresults;
          resolve(results);
        }
      });
    });

    // Fetch book names for each row
    const resultsWithBookNames = await Promise.all(
      results.map(async (row) => {
        if (row.accession === "Library") {
          bookTableName = "library";
        } else {
          bookTableName = "bookbank";
        }

        const bookNames = await new Promise((resolve, reject) => {
          connection.query(`SELECT accessionNumber, bookTitle FROM ${bookTableName} WHERE accessionNumber = ?`, [row.book_id], (error, queryresults) => {
            if (error) {
              console.error("Error fetching book names:", error);
              reject(error);
            } else {
              resolve(queryresults);
            }
          });
        });

        const book = bookNames.find((book) => book.accessionNumber === row.book_id);
        return {
          ...row,
          bookName: book ? book.bookTitle : "Unknown" // Use "Unknown" if book name is not found
        };
      })
    );

    console.log(resultsWithBookNames);

    return {
      statusCode: 200,
      body: JSON.stringify(resultsWithBookNames)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" })
    };
  }
};
