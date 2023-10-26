import React, { useState } from "react";
import { Typography, Table, TableHead, TableBody, TableCell, TableRow, Paper, Card, CardContent } from "@mui/material";

const IssuedBooks = () => {
  const [issuedBooks] = useState([
    {
      bookName: "Book One",
      issueDate: "2023-08-20",
      accessionNumber: "A123",
      issuedBy: "John Doe",
      rollNumber: "12345"
    },
    {
      bookName: "Book Two",
      issueDate: "2023-08-18",
      accessionNumber: "B456",
      issuedBy: "Jane Smith",
      rollNumber: "54321"
    }
  ]);

  const totalIssuedBooks = issuedBooks.length;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" color="#000000" sx={{ fontFamily: ["Dela Gothic One"] }}>Issued Books</Typography>
        <br />
        <div className="total-issued-books">
          <Typography variant="h6" sx={{ fontFamily: ["Roboto"] }}>Total Issued Books: {totalIssuedBooks}</Typography>
        </div>
        <Paper elevation={1}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Book Name</TableCell>
                <TableCell>Issue Date</TableCell>
                <TableCell>Accession Number</TableCell>
                <TableCell>Issued By</TableCell>
                <TableCell>Roll Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {issuedBooks.map((book, index) => (
                <TableRow key={index}>
                  <TableCell>{book.bookName}</TableCell>
                  <TableCell>{book.issueDate}</TableCell>
                  <TableCell>{book.accessionNumber}</TableCell>
                  <TableCell>{book.issuedBy}</TableCell>
                  <TableCell>{book.rollNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default IssuedBooks;
