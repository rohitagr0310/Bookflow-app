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
import { Grid } from "@mui/material";

function Search () {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookInfo, setBookInfo] = useState(null);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleSearch = () => {
    // Check if searchTerm is empty, and if so, reset bookInfo to null
    if (!searchTerm) {
      setBookInfo(null);
      return;
    }

    // In a real application, you would fetch book information from an API
    // based on the searchTerm (book ID), bookNameFilter, and streamFilter.
    // For this example, we'll just set some dummy book information.

    const dummyBookInfo = {
      ID: "1",
      title: "Sample Book",
      author: "John Doe",
      ISBN: "1234567890"
      // Add more book information here.
    };

    setBookInfo(dummyBookInfo);
  };

  // const handleEnterKey = (e) => {
  //   if (e.key === "Enter") {
  //     handleSearch();
  //   }
  // };

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
          <Typography variant="h4" gutterBottom>
            Book Search
          </Typography>
          <TextField
            label="Enter Book ID"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            style={{ marginTop: "16px" }}
          >
            Search
          </Button>
          <Grid container spacing={2} style={{ marginTop: "16px" }}/>
          <QrCodeScannerIcon style={{ fontSize: 40, marginBottom: "16px" }} />
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
                      <TableCell>ID</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Author</TableCell>
                      <TableCell>ISBN</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key={bookInfo.title}>
                      <TableCell>
                        <Checkbox
                          onChange={(e) =>
                            handleCheckboxChange(e, bookInfo.title)
                          }
                          checked={selectedBooks.includes(bookInfo.title)}
                        />
                        {/* Checkbox for the first row */}
                      </TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>{bookInfo.title}</TableCell>
                      <TableCell>{bookInfo.author}</TableCell>
                      <TableCell>{bookInfo.ISBN}</TableCell>
                    </TableRow>
                    {/* Add more book information fields as needed */}
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
