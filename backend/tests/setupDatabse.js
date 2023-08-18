/* eslint-disable require-jsdoc */
// server/tests/setupDatabase.js

const pool = require("../db.test").default; // Assuming you have db.test.js for test database

const createAdminTableQuery = `
CREATE TABLE admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255)
);
`;

const createStudentTableQuery = `
CREATE TABLE student (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);
`;

async function setupDatabase () {
  try {
    await pool.query(createAdminTableQuery);
    await pool.query(createStudentTableQuery);
    console.log("Test database tables created successfully");
  } catch (error) {
    console.error("Error setting up test database:", error);
  } finally {
    pool.end(); // Close the database connection
  }
}

setupDatabase();
