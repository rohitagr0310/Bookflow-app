import { createConnection } from "mysql2";

import { configDotenv } from "dotenv";
configDotenv({ path: "./.env" });

// Create the connection to the database
const connection = createConnection(process.env.REACT_APP_DATABASE_URL);

// simple query
connection.query("show tables", (err, results, fields) => {
  if (err) {
    console.error("Error datebase connection:", err);
  } else {
    console.log(results);
  }
});

export default connection;
