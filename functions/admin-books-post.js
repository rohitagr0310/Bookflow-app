const connection = require("./db-test.js");

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod === "POST") {
      // Parse the incoming JSON data from the request body
      const requestData = JSON.parse(event.body);

      // Ensure that required fields are present in the request data
      if (!requestData.field1 || !requestData.field2 || !requestData.field3) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: "Incomplete data" })
        };
      }

      let tableName;
      // Determine the table name based on requestData or requestType
      if (requestData.bookType === "bookbank") {
        tableName = "bookbank";
      } else if (requestData.bookType === "library") {
        tableName = "library";
      } else {
        // Handle an invalid or missing table name
        return {
          statusCode: 400,
          body: JSON.stringify({ error: "Invalid table name or request type" })
        };
      }

      // Create a new record in the determined table
      await new Promise((resolve, reject) => {
        connection.query(
          `INSERT INTO ${tableName} (field1, field2, field3) VALUES (?, ?, ?)`,
          [requestData.field1, requestData.field2, requestData.field3],
          (error, insertResult) => {
            if (error) {
              console.error(`Error inserting record into ${tableName}:`, error);
              reject(error);
            } else {
              resolve(insertResult);
            }
          }
        );
      });

      return {
        statusCode: 201, // 201 Created
        body: JSON.stringify({ message: `Record added successfully to the ${tableName} table` })
      };
    } else {
      return {
        statusCode: 405, // 405 Method Not Allowed for non-POST requests
        body: JSON.stringify({ error: "Method not allowed" })
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" })
    };
  }
};
