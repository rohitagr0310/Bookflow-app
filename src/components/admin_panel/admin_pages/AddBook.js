import React, { useState } from "react";
import "./_add-book.css"; // Import the CSS file for styling

const AddBook = () => {
  const [accessionNumber, setAccessionNumber] = useState("");
  const [bookName, setBookName] = useState("");
  const [authorOne, setAuthorOne] = useState("");
  const [authorTwo, setAuthorTwo] = useState("");
  const [edition, setEdition] = useState("");
  const [price, setPrice] = useState("");
  const [date, setImmediate] = useState("");
  const [billno, setBillNo] = useState("");

  const handleAddBook = () => {
    // Logic to handle adding the book with the collected data
    console.log("Book added:", {
      accessionNumber,
      bookName,
      authorOne,
      authorTwo,
      edition,
      price,
      date,
      billno
    });

    // Clear input fields
    setAccessionNumber("");
    setBookName("");
    setAuthorOne("");
    setAuthorTwo("");
    setEdition("");
    setPrice("");
    setImmediate("");
    setBillNo("");
  };

  return (
    <div className="add-book-container">
      <h1>Add Book Page</h1>
      <div className="input-group">
        <label>Accession Number:</label>
        <input type="text" value={accessionNumber} onChange={(e) => setAccessionNumber(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Book Name:</label>
        <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Author One:</label>
        <input type="text" value={authorOne} onChange={(e) => setAuthorOne(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Author Two:</label>
        <input type="text" value={authorTwo} onChange={(e) => setAuthorTwo(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Edition:</label>
        <input type="text" value={edition} onChange={(e) => setEdition(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Date</label>
        <input type="text" value={date} onChange={(e) => setAuthorTwo(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Bill No:</label>
        <input type="text" value={billno} onChange={(e) => setAuthorTwo(e.target.value)} />
      </div>
      <div className="center-button">
        <button onClick={handleAddBook}>Add Book</button>
      </div>
    </div>
  );
};

export default AddBook;
