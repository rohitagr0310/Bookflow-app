// server/controllers/studentController.js

import pool from "../db.js";

const studentController = {
  getAllStudents: (req, res) => {
    // Implement logic to fetch all students from the database
    pool.query("SELECT * FROM students", (error, results) => {
      if (error) {
        console.error("Error fetching students:", error);
        res.status(500).json({ error: "An error occurred" });
      } else {
        res.status(200).json(results);
      }
    });
  },

  createStudent: (req, res) => {
    // Implement logic to create a new student in the database
    const { name, rollNumber } = req.body;
    pool.query(
      "INSERT INTO students (name, rollNumber) VALUES (?, ?)",
      [name, rollNumber],
      (error, results) => {
        if (error) {
          console.error("Error creating student:", error);
          res.status(500).json({ error: "An error occurred" });
        } else {
          res.status(201).json({ message: "Student created successfully" });
        }
      }
    );
  }

  // Implement more controller functions for other student actions
};

export default studentController;
