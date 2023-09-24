const connection = require("./db-test.js");

exports.handler = async (event, context) => {
  try {
    // Parse the request body to get user ID and updated data
    const { userid, updatedData } = JSON.parse(event.body);

    // Update the user data in the database
    await new Promise((resolve, reject) => {
      connection.query("UPDATE user SET ? WHERE id = ?", [updatedData, userid], (error, queryresults) => {
        if (error) {
          console.error("Error updating user data:", error);
          reject(error);
        } else {
          resolve();
        }
      });
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "User data updated successfully" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" })
    };
  }
};
