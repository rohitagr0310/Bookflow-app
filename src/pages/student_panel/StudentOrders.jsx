import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function BookTable () {
  // eslint-disable-next-line no-unused-vars
  const [books, setBooks] = useState([
    {
      id: 1,
      name: "Book 1",
      stream: "stream A",
      submissionDate: "2023-09-10",
      pendingDays: 2
    },
    {
      id: 2,
      name: "Book 2",
      stream: "stream B",
      submissionDate: "2023-09-08",
      pendingDays: 4
    }
    // Add more book data as needed
  ]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>stream</TableCell>
            <TableCell>Date of Submission</TableCell>
            <TableCell>Date Pending Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell>{book.id}</TableCell>
              <TableCell>{book.name}</TableCell>
              <TableCell>{book.stream}</TableCell>
              <TableCell>{book.submissionDate}</TableCell>
              <TableCell>{book.pendingDays} days</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BookTable;
