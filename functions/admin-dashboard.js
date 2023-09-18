const connection = require("./db-test.js");

exports.handler = async (event, context) => {
  try {
    const results = {};

    results.issuedLibrary = [];
    results.issuedBB = [];

    await new Promise((resolve, reject) => {
      connection.query("SELECT count(*) FROM library", (error, queryresults) => {
        if (error) {
          console.error("Error fetching books:", error);
          reject(error);
        } else {
          results.countLib = queryresults[0]["count(*)"];
          resolve(results);
        }
      });
    });

    await new Promise((resolve, reject) => {
      connection.query("SELECT count(*) FROM bookbank", (error, queryresults) => {
        if (error) {
          console.error("Error fetching books:", error);
          reject(error);
        } else {
          results.countBB = queryresults[0]["count(*)"];
          resolve(results);
        }
      });
    });

    await new Promise((resolve, reject) => {
      connection.query("SELECT count(*) FROM issued_library", (error, queryresults) => {
        if (error) {
          console.error("Error fetching books:", error);
          reject(error);
        } else {
          results.countIssueLib = queryresults[0]["count(*)"];
          resolve(results);
        }
      });
    });

    await new Promise((resolve, reject) => {
      connection.query("SELECT count(*) FROM issued_bb", (error, queryresults) => {
        if (error) {
          console.error("Error fetching books:", error);
          reject(error);
        } else {
          results.countIssueBB = queryresults[0]["count(*)"];
          resolve(results);
        }
      });
    });

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i); // Calculate the date for each day in the past week

      await new Promise((resolve, reject) => {
        // Query issued_library for each day
        connection.query(
          "SELECT count(*) FROM issued_library WHERE DATE(issue_date) = ?",
          [date.toISOString().split("T")[0]],
          (error, queryresults) => {
            if (error) {
              console.error("Error fetching issued_library data:", error);
              reject(error);
            } else {
              // Store the count for each day
              results.issuedLibrary.push({
                date: date.toISOString().split("T")[0],
                count: queryresults[0]["count(*)"]
              });
              resolve(results);
            }
          }
        );
      });

      await new Promise((resolve, reject) => {
        // Query issued_bb for each day
        connection.query(
          "SELECT count(*) FROM issued_bb WHERE DATE(issue_date) = ?",
          [date.toISOString().split("T")[0]],
          (error, queryresults) => {
            if (error) {
              console.error("Error fetching issued_bb data:", error);
              reject(error);
            } else {
              // Store the count for each day
              results.issuedBB.push({
                date: date.toISOString().split("T")[0],
                count: queryresults[0]["count(*)"]
              });
              resolve(results);
            }
          }
        );
      });
    }

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
