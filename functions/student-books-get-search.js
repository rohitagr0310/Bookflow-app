const connection = require("./db-test.js");

exports.handler = async (event, context) => {
  try {
    let results;
    const { searchKeyword } = JSON.parse(event.body);

    await new Promise((resolve, reject) => {
      // input search argument
      connection.query(`SELECT * FROM library WHERE bookTitle LIKE '%${searchKeyword}%' UNION ALL SELECT * FROM bookbank WHERE bookTitle LIKE '%${searchKeyword}%' LIMIT 50`, (error, queryresults) => {
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
