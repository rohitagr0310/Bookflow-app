// server/controllers/bookController.js

import { query } from "../db.js";

const bookController = {
  getAllBooks: (req, res) => {
    // Implement logic to fetch all books from the database
    query("SELECT * FROM books", (error, results) => {
      if (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: "An error occurred" });
      } else {
        res.status(200).json(results);
      }
    });
  },

  createBook: (req, res) => {
    // Implement logic to create a new book in the database
    const { title, author } = req.body;
    query(
      "INSERT INTO books (title, author) VALUES (?, ?)",
      [title, author],
      (error, results) => {
        if (error) {
          console.error("Error creating book:", error);
          res.status(500).json({ error: "An error occurred" });
        } else {
          res.status(201).json({ message: "Book created successfully" });
        }
      }
    );
  }

  // Implement more controller functions for other book actions
};

export default bookController;
