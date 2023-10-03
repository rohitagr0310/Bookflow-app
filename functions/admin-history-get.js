const connection = require("./db-test.js");

exports.handler = async (event, context) => {
  try {
    // Parse the incoming JSON data from the request body
    const requestData = JSON.parse(event.body);

    let tableName;
    // Determine the table name based on requestData or requestType
    if (requestData.requestType === "bookbank") {
      tableName = "history_bb";
    } else if (requestData.requestType === "library") {
      tableName = "history_library";
    } else {
      // Handle an invalid or missing table name or request type
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid table name or request type" })
      };
    }

    let results;

    await new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${tableName} LIMIT 50`, (error, queryresults) => {
        if (error) {
          console.error(`Error fetching data from ${tableName}:`, error);
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
