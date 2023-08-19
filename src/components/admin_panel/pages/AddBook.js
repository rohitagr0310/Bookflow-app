import React, { useState } from "react";

const AddBook = () => {
  const [accessionNumber, setAccessionNumber] = useState("");
  const [bookName, setBookName] = useState("");
  const [authorOne, setAuthorOne] = useState("");
  const [authorTwo, setAuthorTwo] = useState("");
  const [edition, setEdition] = useState("");
  const [price, setPrice] = useState("");

  const handleAddBook = () => {
    // Logic to handle adding the book with the collected data
    console.log("Book added:", {
      accessionNumber,
      bookName,
      authorOne,
      authorTwo,
      edition,
      price
    });

    // Clear input fields
    setAccessionNumber("");
    setBookName("");
    setAuthorOne("");
    setAuthorTwo("");
    setEdition("");
    setPrice("");
  };

  return (
    <div>
      <h1>Add Book Page</h1>
      <div>
        <label>Accession Number:</label>
        <input type="text" value={accessionNumber} onChange={(e) => setAccessionNumber(e.target.value)} />
      </div>
      <div>
        <label>Book Name:</label>
        <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} />
      </div>
      <div>
        <label>Author One:</label>
        <input type="text" value={authorOne} onChange={(e) => setAuthorOne(e.target.value)} />
      </div>
      <div>
        <label>Author Two:</label>
        <input type="text" value={authorTwo} onChange={(e) => setAuthorTwo(e.target.value)} />
      </div>
      <div>
        <label>Edition:</label>
        <input type="text" value={edition} onChange={(e) => setEdition(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default AddBook;
