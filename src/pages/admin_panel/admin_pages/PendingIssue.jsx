import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Card,
  CardContent
} from "@mui/material"; // Import Material-UI components

const PendingIssue = () => {
  const [pendingIssue] = useState([
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
    // Add more pending issues as needed
  ]);

  const totalPendingIssue = pendingIssue.length;

  return (
    <Card>
      <CardContent>
        <div>
          <Typography variant="h4" color="#000000" sx={{ fontFamily: ["Dela Gothic One"] }}>Pending Issue</Typography>
          <br />
          <Typography variant="h6" sx={{ fontFamily: ["Roboto"] }}>
            Total Pending Issues: {totalPendingIssue}
          </Typography>
          <Paper elevation={3}>
            <TableContainer component={Paper} style={{ maxHeight: 400 }}>
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
                  {pendingIssue.map((book, index) => (
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
            </TableContainer>
          </Paper>
          <br />
        </div>
      </CardContent>
    </Card>
  );
};

export default PendingIssue;
