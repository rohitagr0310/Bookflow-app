const connection = require("./db-test.js");

exports.handler = async (event, context) => {
  try {
    let results;
    const { userid, source } = JSON.parse(event.body);

    let tableName;

    // Determine the table name based on the source parameter
    if (source === "library") {
      tableName = "history_library";
    } else if (source === "bookbank") {
      tableName = "history_bb";
    } else {
      // Handle an invalid or missing source parameter as needed
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid source parameter" })
      };
    }

    await new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${tableName} WHERE user_id = ? LIMIT 50`, [userid], (error, queryresults) => {
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
