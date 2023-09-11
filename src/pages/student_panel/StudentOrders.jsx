import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
function BookTable () {
  const [books, setBooks] = useState([
    {
      id: 1,
      name: "Book 1",
      scheme: "Scheme A",
      submissionDate: "2023-09-10",
      pendingDays: 2
    },
    {
      id: 2,
      name: "Book 2",
      scheme: "Scheme B",
      submissionDate: "2023-09-08",
      pendingDays: 4
    }
    // Add more initial book data as needed
  ]);

  // Simulate receiving new book data
  useEffect(() => {
    // This is just a sample. You can replace this with real data fetching logic.
    const newBookData = {
      id: books.length + 1,
      name: "New Book",
      scheme: "Scheme C",
      submissionDate: "2023-09-12",
      pendingDays: 1
    };

    // Add the new book data to the state
    setBooks([...books, newBookData]);
  }, [books]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Student Book Information
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Scheme</TableCell>
              <TableCell>Date of Submission</TableCell>
              <TableCell>Date Pending Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.id}</TableCell>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.scheme}</TableCell>
                <TableCell>{book.submissionDate}</TableCell>
                <TableCell>{book.pendingDays} days</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default BookTable;
