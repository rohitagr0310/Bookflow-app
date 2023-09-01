/* eslint-disable require-jsdoc */
import React from "react";
import SearchResults from "../student_search/SearchResults.jsx"; // Adjust the import path as needed

function BooksIssued () {
  // Simulated data for the issued books
  const issuedBooks = [
    { id: 1, name: "John Doe", title: "Book A", bookId: "12345" },
    { id: 2, name: "Jane Smith", title: "Book B", bookId: "67890" }
    // Add more data as needed
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <h2>Issued Books</h2>
        <SearchResults results={issuedBooks} />
        {/* You can render the list of issued books here */}
      </div>
    </div>
  );
}

export default BooksIssued;
