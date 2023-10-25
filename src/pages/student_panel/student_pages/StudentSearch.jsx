import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox"; // Moved this import to the top
import Paper from "@mui/material/Paper"; // Moved this import to the top
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { IconButton, Grid } from "@mui/material";
import axios from "axios";
import { QrReader } from "react-qr-reader";

function Search () {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookInfo, setBookInfo] = useState();
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [data, setData] = useState("No result");
  const [qrScannerActive, setQrScannerActive] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm) {
      setBookInfo(null);
      return;
    }

    try {
      const response = await axios.post("/.netlify/functions/student-books-get-search", {
        searchKeyword: searchTerm
      });

      const data = response.data;
      console.log("api data", data);

      setBookInfo(data);
    } catch (error) {
      console.error("Error fetching book information:", error);
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleCheckboxChange = (event, book) => {
    if (event.target.checked) {
      setSelectedBooks([...selectedBooks, book]);
    } else {
      setSelectedBooks(
        selectedBooks.filter((selectedBook) => selectedBook !== book)
      );
    }
  };

  const handleSubmitRequest = () => {
    // Perform the submission logic here with the selected books
    console.log("Selected Books:", selectedBooks);
    // Reset the selected books after submission
    setSelectedBooks([]);
  };

  return (
    <Card>
      <CardContent>
        <div>
          <Typography variant="h4" sx={{ fontFamily: "Dela Gothic One" }} gutterBottom>
            Book Search
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              label="Enter Book Name"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleEnterKey}
            />
            <IconButton
              onClick={() => setQrScannerActive(!qrScannerActive)}
              color={qrScannerActive ? "primary" : "default"}
            >
              <QrCodeScannerIcon />
            </IconButton>

          </div>
          {qrScannerActive && (
            <QrReader
              onResult={(result, error) => {
                if (result) {
                  setQrScannerActive(false);
                  setData(result?.text);
                }

                if (error) {
                  console.info(error);
                }
              }}
              style={{ width: "100%" }}
            />
          )}
          <p>{data}</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              sx={{ marginTop: "16px", backgroundColor: "#68967D", fontFamily: "Roboto", ":hover": { backgroundColor: "#000000" } }}
            >
              Search
            </Button>
          </div>
          <Grid container spacing={2} style={{ marginTop: "16px" }} />
          {bookInfo && (
            <div>
              <Typography variant="h5" style={{ marginTop: "16px" }}>
                Book Information
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Select</TableCell>
                      <TableCell>Accession Type</TableCell>
                      <TableCell>Book Title</TableCell>
                      <TableCell>Author</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bookInfo.map((book) => (
                      <TableRow key={book.bookTitle}>
                        <TableCell>
                          <Checkbox
                            onChange={(e) => handleCheckboxChange(e, book.bookTitle)}
                            checked={selectedBooks.includes(book.bookTitle)}
                          />
                          {/* Checkbox for each row */}
                        </TableCell>
                        <TableCell>{book.accessionType}</TableCell>
                        <TableCell>{book.bookTitle}</TableCell>
                        <TableCell>{book.authorFirst}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}

          {selectedBooks.length > 0 && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmitRequest}
                style={{ marginTop: "16px" }}
              >
                Submit Request
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default Search;
