const connection = require("../db.js");

const dbConnection = require("../db.js");

exports.addBookTest = async (event, context) => {
  try {
    const bookData = JSON.parse(event.body);

    await new Promise((resolve, reject) => {
      dbConnection.query("INSERT INTO test SET ?", bookData, (error, result) => {
        if (error) {
          console.error("Error adding book:", error);
          reject(error);
        } else {
          console.log("Book added:", result);
          resolve(result);
        }
      });
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Book added successfully" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" })
    };
  }
};

exports.addBookLibrary = async (event, context) => {
  try {
    const bookData = JSON.parse(event.body);

    await new Promise((resolve, reject) => {
      connection.query("INSERT INTO library SET ?", bookData, (error, result) => {
        if (error) {
          console.error("Error adding book:", error);
          reject(error);
        } else {
          console.log("Book added:", result);
          resolve(result);
        }
      });
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Book added successfully" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" })
    };
  }
};

exports.getAllBookslibrary = async (event, context) => {
  try {
    const results = await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM library limit 50", (error, queryResults) => {
        if (error) {
          console.error("Error fetching books:", error);
          reject(error);
        } else {
          resolve(queryResults);
        }
      });
    });

    return {
      statusCode: 200,
      body: JSON.stringify(results)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" })
    };
  }
};

exports.getAllBooksTest = async (event, context) => {
  try {
    let results;

    await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM test limit 50", (error, queryresults) => {
        if (error) {
          console.error("Error fetching books:", error);
          reject(error);
        } else {
          results = queryresults;
          resolve(results);
        }
      });
    });

    return {
      statusCode: 200,
      body: JSON.stringify(results)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" })
    };
  }
};

exports.getAllBooksBank = async (event, context) => {
  try {
    let results;

    await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM bookbank limit 50", (error, queryresults) => {
        if (error) {
          console.error("Error fetching books:", error);
          reject(error);
        } else {
          results = queryresults;
          resolve(results);
        }
      });
    });

    return {
      statusCode: 200,
      body: JSON.stringify(results)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" })
    };
  }
};
