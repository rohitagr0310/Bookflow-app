import React, { useState } from "react";
import "./_add-book.css";
import axios from "axios";

const AddBook = () => {
  const [accessionType, setAccessionType] = useState("");
  const [accessionNumber, setAccessionNumber] = useState("");
  const [accessionPrefix, setAccessionPrefix] = useState("");
  const [accessionDate, setAccessionDate] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [authorFirst, setAuthorFirst] = useState("");
  const [authorSecond, setAuthorSecond] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [pages, setPages] = useState("");
  const [subject, setSubject] = useState("");
  const [language, setLanguage] = useState("");
  const [edition, setEdition] = useState("");
  const [vendor, setVendor] = useState("");
  const [billNo, setBillNo] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [purchaseCost, setPurchaseCost] = useState("");
  const [keyword, setKeyword] = useState("");
  const [qrCode, setQRCode] = useState("");

  const handleAddBook = () => {
    const bookData = {
      accessionType,
      accessionNumber,
      accessionPrefix,
      accessionDate,
      bookTitle,
      authorFirst,
      authorSecond,
      publisher,
      year,
      pages,
      subject,
      language,
      edition,
      vendor,
      billNo,
      purchaseDate,
      purchaseCost,
      keyword,
      qrCode
    };
    console.log("Book added:", {
      accessionType,
      accessionNumber,
      accessionPrefix,
      accessionDate,
      bookTitle,
      authorFirst,
      authorSecond,
      publisher,
      year,
      pages,
      subject,
      language,
      edition,
      vendor,
      billNo,
      purchaseDate,
      purchaseCost,
      keyword
    });

    axios.post("/add-book", bookData) // Send data to the server
      .then(response => {
        console.log("Book added successfully:", response.data);
        // Clear input fields
        setAccessionType("");
        setAccessionNumber("");
        setAccessionPrefix("");
        setAccessionDate("");
        setBookTitle("");
        setAuthorFirst("");
        setAuthorSecond("");
        setPublisher("");
        setYear("");
        setPages("");
        setSubject("");
        setLanguage("");
        setEdition("");
        setVendor("");
        setBillNo("");
        setPurchaseDate("");
        setPurchaseCost("");
        setKeyword("");
        setQRCode("");
      })
      .catch(error => {
        console.error("Error adding book:", error);
      });
  };

  return (
    <div className="add-book-container">
      <h1>Add Book Page</h1>
      <div className="input-group">
        <label>Accession Type:</label>
        <input type="text" value={accessionType} onChange={(e) => setAccessionType(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Accession Number:</label>
        <input type="text" value={accessionNumber} onChange={(e) => setAccessionNumber(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Accession Prefix:</label>
        <input type="text" value={accessionPrefix} onChange={(e) => setAccessionPrefix(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Accession Date:</label>
        <input type="text" value={accessionDate} onChange={(e) => setAccessionDate(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Book Title:</label>
        <input type="text" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Author First:</label>
        <input type="text" value={authorFirst} onChange={(e) => setAuthorFirst(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Author Second:</label>
        <input type="text" value={authorSecond} onChange={(e) => setAuthorSecond(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Publisher:</label>
        <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Year:</label>
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
      </div>w
      <div className="input-group">
        <label>Pages:</label>
        <input type="text" value={pages} onChange={(e) => setPages(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Subject:</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Language:</label>
        <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Edition:</label>
        <input type="text" value={edition} onChange={(e) => setEdition(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Vendor:</label>
        <input type="text" value={vendor} onChange={(e) => setVendor(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Bill No:</label>
        <input type="text" value={billNo} onChange={(e) => setBillNo(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Purchase Date:</label>
        <input type="text" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Purchase Cost:</label>
        <input type="text" value={purchaseCost} onChange={(e) => setPurchaseCost(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Keyword:</label>
        <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      </div>
      <div className="input-group">
        <label>QR Code:</label>
        <input type="text" value={qrCode} onChange={(e) => setQRCode(e.target.value)} />
      </div>
      <div className="center-button">
        <button onClick={handleAddBook}>Add Book</button>
      </div>
    </div>
  );
};

export default AddBook;
