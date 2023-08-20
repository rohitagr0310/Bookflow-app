import React, { useState } from "react";
import "./_issued-book.css"; // Import the CSS file for styling

const IssuedBooks = () => {
  const [issuedBooks] = useState([
    {
      bookName: "Book One",
      issueDate: "2023-08-20",
      accessionNumber: "A123",
      issuedBy: "John Doe",
      rollNumber: "12345"
    },
    {
      bookName: "Book Two",
      issueDate: "2023-08-18",
      accessionNumber: "B456",
      issuedBy: "Jane Smith",
      rollNumber: "54321"
    }
    // Add more issued book objects here
  ]);

  const totalIssuedBooks = issuedBooks.length;

  return (
    <div className="issued-books-container">
      <h1>Issued Books</h1>
      <div className="total-issued-books">
        <p>Total Issued Books: {totalIssuedBooks}</p>
      </div>
      <table className="issued-books-list">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Issue Date</th>
            <th>Accession Number</th>
            <th>Issued By</th>
            <th>Roll Number</th>
          </tr>
        </thead>
        <tbody>
          {issuedBooks.map((book, index) => (
            <tr key={index}>
              <td>{book.bookName}</td>
              <td>{book.issueDate}</td>
              <td>{book.accessionNumber}</td>
              <td>{book.issuedBy}</td>
              <td>{book.rollNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssuedBooks;
