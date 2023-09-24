const connection = require("./db-test.js");

const queryDatabase = async (connection, sql, params) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.handler = async (req, res) => {
  try {
    const { userid, bookid, isLib } = req.query;

    // Look up the user by the verification token
    let book;
    const [user] = await queryDatabase(connection, "SELECT * FROM user WHERE id = ?", [userid]);
    if (isLib) {
      [book] = await queryDatabase(connection, "SELECT * FROM library WHERE id = ?", [bookid]);
    } else {
      [book] = await queryDatabase(connection, "SELECT * FROM bookbank WHERE id = ?", [bookid]);
    }

    if (!user) {
      // User not found in the database
      return res.status(400).send("User not found.");
    }

    if (!book) {
      // Book not found in the database
      return res.status(400).send("Book not found.");
    }

    let accession;
    if (isLib) {
      accession = "Library";
    } else {
      accession = "BookBank";
    }

    // Insert a new record into the book_return_requests table
    const insertResult = await queryDatabase(
      connection,
      "INSERT INTO book_return_requests (user_id, book_id, accession) VALUES (?, ?, ?)",
      [userid, bookid, accession]
    );

    if (insertResult.affectedRows === 1) {
      // Book issue request successfully inserted
      return res.status(200).send("Book return request sent to admin.");
    } else {
      // Failed to insert the request
      return res.status(500).send("Failed to send book return request.");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred during book issue request.");
  }
};
