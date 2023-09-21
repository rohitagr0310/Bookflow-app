const connection = require("./db-test.js");

exports.handler = async (event, context) => {
  try {
    let results;

    await new Promise((resolve, reject) => {
      // input user id argument
      connection.query("SELECT * FROM issued_bb WHERE user_id = <user_id> limit 50", (error, queryresults) => {
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
