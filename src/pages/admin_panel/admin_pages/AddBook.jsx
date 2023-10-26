/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, FormControl, Select, MenuItem, Card, CardContent, Grid, Typography } from "@mui/material";

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
  const [selectedTable, setSelectedTable] = useState("test");

  useEffect(() => {
    handleAddBook(selectedTable);
  }, [selectedTable]);

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

    const apiUrl = `http://localhost:5000/api/admin/add-book/${selectedTable}`;

    axios
      .post(apiUrl, bookData)
      .then((response) => {
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
      .catch((error) => {
        console.error("Error adding book:", error);
      });
  };

  return (
    <Card>
      <CardContent>
        <div className="add-book-container">
          <Typography variant="h4" color="#000000" sx={{ fontFamily: ["Dela Gothic One"], paddingBottom: "0.5em" }}>Add Book</Typography>
          <div className="input-group">
            <FormControl>
              <Grid container spacing={1}>
                <Select value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)} sx={{ marginLeft: "0.5em" }}>
                  <MenuItem value="test" sx={{ ":hover": { backgroundColor: "#a7dbbf" } }}>test</MenuItem>
                  <MenuItem value="library" sx={{ ":hover": { backgroundColor: "#a7dbbf" } }}>Library</MenuItem>
                </Select>
              </Grid>
            </FormControl>
          </div>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <TextField
                label="Accession Type"
                value={accessionType}
                onChange={(e) => setAccessionType(e.target.value)}
              /></Grid>
            <Grid item xs={2}>
              <TextField
                label="Accession Number"
                value={accessionNumber}
                onChange={(e) => setAccessionNumber(e.target.value)}
              /></Grid>
            <Grid item xs={2}>
              <TextField
                label="Accession Prefix"
                value={accessionPrefix}
                onChange={(e) => setAccessionPrefix(e.target.value)}
              /></Grid>
            <Grid item xs={2}>
              <TextField
                label="Accession Date"
                value={accessionDate}
                onChange={(e) => setAccessionDate(e.target.value)}
              /></Grid>
            <Grid item xs={2}>
              <TextField
                label="Book Title"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Author First"
                value={authorFirst}
                onChange={(e) => setAuthorFirst(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Author Second"
                value={authorSecond}
                onChange={(e) => setAuthorSecond(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Publisher"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField label="Year" value={year} onChange={(e) => setYear(e.target.value)} />
            </Grid>
            <Grid item xs={2}>
              <TextField label="Pages" value={pages} onChange={(e) => setPages(e.target.value)} />
            </Grid>
            <Grid item xs={2}>
              <TextField label="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </Grid>
            <Grid item xs={2}>
              <TextField label="Language" value={language} onChange={(e) => setLanguage(e.target.value)} />
            </Grid>
            <Grid item xs={2}>
              <TextField label="Edition" value={edition} onChange={(e) => setEdition(e.target.value)} />
            </Grid>
            <Grid item xs={2}>
              <TextField label="Vendor" value={vendor} onChange={(e) => setVendor(e.target.value)} />
            </Grid>
            <Grid item xs={2}><TextField label="Bill No" value={billNo} onChange={(e) => setBillNo(e.target.value)} />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Purchase Date"
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Purchase Cost"
                value={purchaseCost}
                onChange={(e) => setPurchaseCost(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField label="Keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            </Grid>
            <Grid item xs={2}>
              <TextField label="QR Code" value={qrCode} onChange={(e) => setQRCode(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <div className="center-button">
                <Button variant="contained" onClick={handleAddBook} sx={{ backgroundColor: "#68967D", fontFamily: "Roboto", ":hover": { backgroundColor: "#000000" } }}>
          Add Book
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </CardContent>
      <style jsx>{`
        /* Add responsive styles here */
        .add-book-container {
          padding: 16px;
        }

        .input-group {
          margin-bottom: 16px;
        }

        .center-button {
          text-align: center;
          margin-top: 16px;
        }

        @media (max-width: 768px) {
          /* Adjust styles for screens smaller than 768px (typical mobile devices) */
          .add-book-container {
            padding: 8px;
          }

          .input-group {
            margin-bottom: 8px;
          }

          .center-button {
            text-align: center;
            margin-top: 8px;
          }
        }
      `}</style>
    </Card>
  );
};

export default AddBook;
