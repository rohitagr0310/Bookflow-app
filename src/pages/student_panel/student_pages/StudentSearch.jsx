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

function Search () {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookInfo, setBookInfo] = useState(null);
  const [bookNameFilter, setBookNameFilter] = useState("");
  const [streamFilter, setStreamFilter] = useState("");

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
      title: "Sample Book",
      author: "John Doe",
      ISBN: "1234567890"
      // Add more book information here.
    };

    setBookInfo(dummyBookInfo);
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
          <TextField
            label="Filter by Book Name"
            variant="outlined"
            fullWidth
            value={bookNameFilter}
            onChange={(e) => setBookNameFilter(e.target.value)}
            style={{ marginTop: "16px" }}
          />
          <TextField
            label="Filter by Student Stream"
            variant="outlined"
            fullWidth
            value={streamFilter}
            onChange={(e) => setStreamFilter(e.target.value)}
            style={{ marginTop: "16px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            style={{ marginTop: "16px" }}
          >
        Search
          </Button>
          {bookInfo && (
            <div>
              <Typography variant="h5" style={{ marginTop: "16px" }}>
            Book Information
              </Typography>
              <TableContainer style={{ marginTop: "16px" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Field</TableCell>
                      <TableCell>Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>{bookInfo.title}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Author</TableCell>
                      <TableCell>{bookInfo.author}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>ISBN</TableCell>
                      <TableCell>{bookInfo.ISBN}</TableCell>
                    </TableRow>
                    {/* Add more book information fields as needed */}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default Search;
