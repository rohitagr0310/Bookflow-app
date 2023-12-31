const connection = require("./db-test.js");

exports.handler = async (event, context) => {
  try {
    let results;
    const { userid } = JSON.parse(event.body);

    await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM user where id = ? limit 50", [userid], (error, queryresults) => {
        if (error) {
          console.error("Error fetching requests:", error);
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
