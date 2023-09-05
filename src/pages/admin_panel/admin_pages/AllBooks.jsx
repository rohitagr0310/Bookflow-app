import React, { useState, useEffect } from "react";
import axios from "axios";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:5000/api/admin/all-books";

    axios.get(apiUrl)
      .then(response => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div>
      <h2>All Books</h2>
      <table>
        <thead>
          <tr>
            <th>Accession Number</th>
            <th>Accession Type</th>
            <th>Accession Prefix</th>
            <th>Accession Date</th>
            <th>Book Title</th>
            <th>Author First</th>
            <th>Author Second</th>
            <th>Publisher</th>
            <th>Year</th>
            <th>Pages</th>
            <th>Subject</th>
            <th>Language</th>
            <th>Edition</th>
            <th>Vendor</th>
            <th>Bill No</th>
            <th>Purchase Date</th>
            <th>Purchase Cost</th>
            <th>Keyword</th>
            <th>QR Code</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.accessionNumber}>
              <td>{book.accessionNumber}</td>
              <td>{book.accessionType}</td>
              <td>{book.accessionPrefix}</td>
              <td>{book.accessionDate}</td>
              <td>{book.bookTitle}</td>
              <td>{book.authorFirst}</td>
              <td>{book.authorSecond}</td>
              <td>{book.publisher}</td>
              <td>{book.year}</td>
              <td>{book.pages}</td>
              <td>{book.subject}</td>
              <td>{book.language}</td>
              <td>{book.edition}</td>
              <td>{book.vendor}</td>
              <td>{book.billNo}</td>
              <td>{book.purchaseDate}</td>
              <td>{book.purchaseCost}</td>
              <td>{book.keyword}</td>
              <td>{book.qrCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBooks;
