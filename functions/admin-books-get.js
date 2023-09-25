const connection = require("./db-test.js");

exports.handler = async (event, context) => {
  try {
    const { tableName } = JSON.parse(event.body);

    let results;

    await new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${tableName} LIMIT 50`, (error, queryresults) => {
        if (error) {
          console.error(`Error fetching books from ${tableName}:`, error);
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
