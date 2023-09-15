// require("dotenv").config();
// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: process.env.DB_HOST_TEST,
//   user: process.env.DB_USER_TEST,
//   password: process.env.DB_PASSWORD_TEST,
//   database: process.env.DB_DATABASE_TEST
// });

// // Function to query the database
// const queryDatabase = async (sql, params) => {
//   return new Promise((resolve, reject) => {
//     pool.query(sql, params, (error, results, fields) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };

// module.exports = {
//   queryDatabase
// };

require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST_TEST,
  user: process.env.DB_USER_TEST,
  password: process.env.DB_PASSWORD_TEST,
  database: process.env.DB_DATABASE_TEST
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    throw err;
  }
  console.log("Connected to the database");
});

module.exports = connection;
