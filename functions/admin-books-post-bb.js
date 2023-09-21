const connection = require("./db-test.js");

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod === "POST") {
      // Parse the incoming JSON data from the request body
      const requestData = JSON.parse(event.body);

      // Ensure that required book fields are present in the request data
      if (!requestData.title || !requestData.author || !requestData.published_year) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: "Incomplete book data" })
        };
      }

      // Create a new book record in the bookbank table
      await new Promise((resolve, reject) => {
        connection.query(
          "INSERT INTO bookbank (title, author, published_year) VALUES (?, ?, ?)",
          [requestData.title, requestData.author, requestData.published_year],
          (error, insertResult) => {
            if (error) {
              console.error("Error inserting book:", error);
              reject(error);
            } else {
              resolve(insertResult);
            }
          }
        );
      });

      return {
        statusCode: 201, // 201 Created
        body: JSON.stringify({ message: "Book added successfully to the bookbank" })
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
