import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  FormControl,
  Input,
  Select,
  MenuItem,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardContent,
  Paper // Use Paper component for the table container
} from "@mui/material";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [selectedTable, setSelectedTable] = useState("library");

  useEffect(() => {
    fetchBooks(selectedTable);
  }, [selectedTable]);

  const fetchBooks = (table) => {
    const apiUrl = `http://localhost:5000/api/admin/all-books/${table}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching books from ${table}:`, error);
      });
  };

  return (
    <Card>
      <CardContent>
        <Container>
          <Typography variant="h4" color="#000000" sx={{ fontFamily: ["Dela Gothic One"] }}>All Books</Typography>
          <FormControl>
            <Input htmlFor="tableSelect"></Input>
            <Select
              id="tableSelect"
              value={selectedTable}
              onChange={(e) => setSelectedTable(e.target.value)}
              sx={{ marginBottom: "0.5em" }}
            >
              <MenuItem value="library" sx={{ ":hover": { backgroundColor: "#a7dbbf" } }}>Library</MenuItem>
              <MenuItem value="test" sx={{ ":hover": { backgroundColor: "#a7dbbf" } }}>Test</MenuItem>
            </Select>
          </FormControl>
          <TableContainer component={Paper} style={{ maxHeight: 400 }}> {/* Adjust maxHeight to control the scrolling */}
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Accession Number</TableCell>
                  <TableCell>Accession Type</TableCell>
                  <TableCell>Accession Prefix</TableCell>
                  <TableCell>Accession Date</TableCell>
                  <TableCell>Book Title</TableCell>
                  <TableCell>Author First</TableCell>
                  <TableCell>Author Second</TableCell>
                  <TableCell>Publisher</TableCell>
                  <TableCell>Year</TableCell>
                  <TableCell>Pages</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Language</TableCell>
                  <TableCell>Edition</TableCell>
                  <TableCell>Vendor</TableCell>
                  <TableCell>Bill No</TableCell>
                  <TableCell>Purchase Date</TableCell>
                  <TableCell>Purchase Cost</TableCell>
                  <TableCell>Keyword</TableCell>
                  <TableCell>QR Code</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books.map((book) => (
                  <TableRow key={book.accessionNumber}>
                    <TableCell>{book.accessionNumber}</TableCell>
                    <TableCell>{book.accessionType}</TableCell>
                    <TableCell>{book.accessionPrefix}</TableCell>
                    <TableCell>{book.accessionDate}</TableCell>
                    <TableCell>{book.bookTitle}</TableCell>
                    <TableCell>{book.authorFirst}</TableCell>
                    <TableCell>{book.authorSecond}</TableCell>
                    <TableCell>{book.publisher}</TableCell>
                    <TableCell>{book.year}</TableCell>
                    <TableCell>{book.pages}</TableCell>
                    <TableCell>{book.subject}</TableCell>
                    <TableCell>{book.language}</TableCell>
                    <TableCell>{book.edition}</TableCell>
                    <TableCell>{book.vendor}</TableCell>
                    <TableCell>{book.billNo}</TableCell>
                    <TableCell>{book.purchaseDate}</TableCell>
                    <TableCell>{book.purchaseCost}</TableCell>
                    <TableCell>{book.keyword}</TableCell>
                    <TableCell>{book.qrCode}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </CardContent>
    </Card>
  );
};

export default AllBooks;
