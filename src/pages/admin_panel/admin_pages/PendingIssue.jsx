import React, { useState } from "react";
import "./_pending-issue.css";
import {
  Table,
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
          <Typography variant="h3">Pending Issue</Typography>
          <br />
          <Paper elevation={3}>
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
          </Paper>
          <br />
          <Typography variant="h6">
        Total Pending Issues: {totalPendingIssue}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default PendingIssue;
