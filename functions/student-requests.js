const connection = require("./db-test.js");

exports.handler = async (event, context) => {
  try {
    const { userid, requestType } = JSON.parse(event.body);

    let tableName;

    // Determine the table name based on the requestType parameter
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
