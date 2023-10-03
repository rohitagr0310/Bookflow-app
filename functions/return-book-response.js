// Function to retrieve all pending book issue requests for the admin
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

// Function to accept a specific book issue request by ID
exports.acceptRequest = async (req, res) => {
  try {
    const { requestId } = req.body;

    const [returnRequest] = await queryDatabase(
      connection,
      "SELECT * FROM book_return_requests where id = ?",
      requestId
    );

    if (!returnRequest) {
      return res.status(404).send("Request not found or already processed.");
    }

    // Determine whether the request is for the library or book bank
    const accession = returnRequest.accession;

    // Insert a new record into the corresponding history table (e.g., history_library or history_bb)
    const currentDate = new Date();

    const issuedEntry = await queryDatabase(
      connection,
      `select * from ${accession === "Library" ? "issued_library" : "issued_bb"} where book_id = ?`,
      returnRequest.book_id
    );

    const insertResult = await queryDatabase(
      connection,
      `INSERT INTO ${accession === "Library" ? "history_library" : "history_bb"} (user_id, book_id, issue_date, return_date) VALUES (?, ?, ?, ?)`,
      [returnRequest.user_id, returnRequest.book_id, issuedEntry.issue_date, currentDate]
    );

    await queryDatabase(
      connection,
      `delete from ${accession === "Library" ? "issued_library" : "issued_bb"} where ("id" = ?)`,
      issuedEntry.id
    );

    if (insertResult.affectedRows === 1) {
      // Update the request status to 'accepted' in the book_issue_requests table
      await queryDatabase(
        connection,
        "delete from book_return_requests WHERE id = ?",
        returnRequest.id
      );

      res.status(200).send("Request accepted.");
    } else {
      res.status(500).send("Failed to accept the request.");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
};
