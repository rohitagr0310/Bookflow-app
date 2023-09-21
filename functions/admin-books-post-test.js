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

      // Create a new record in the "test" table
      await new Promise((resolve, reject) => {
        connection.query(
          "INSERT INTO test (field1, field2, field3) VALUES (?, ?, ?)",
          [requestData.field1, requestData.field2, requestData.field3],
          (error, insertResult) => {
            if (error) {
              console.error("Error inserting record:", error);
              reject(error);
            } else {
              resolve(insertResult);
            }
          }
        );
      });

      return {
        statusCode: 201, // 201 Created
        body: JSON.stringify({ message: "Record added successfully to the test table" })
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
