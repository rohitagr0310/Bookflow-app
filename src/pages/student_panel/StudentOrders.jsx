import React, { useState } from "react";
import { FormControl, Grid, Select, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, CardContent } from "@mui/material";

function BookTable () {
  // eslint-disable-next-line no-unused-vars
  const [books, setBooks] = useState([
    {
      id: 1,
      Accession_Number: "Accession_Number1",
      name: "Book 1",
      stream: "stream A",
      submissionDate: "2023-09-10",
      pendingDays: 2
    },
    {
      id: 2,
      Accession_Number: "Accession_Number2",
      name: "Book 2",
      stream: "stream B",
      submissionDate: "2023-09-08",
      pendingDays: 4
    }
    // Add more book data as needed
  ]);
  const [selectedTable, setSelectedTable] = useState("test");

  return (
    <card >
      <CardContent>
        <h1>Padding Book</h1>
        <div>
          <FormControl>
            <Grid container spacing={1}>
              <Select value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)}>
                <MenuItem value="test">test</MenuItem>
                <MenuItem value="library">Library</MenuItem>
                <MenuItem value="bookbank">Book Bank</MenuItem>
              </Select>
            </Grid>
          </FormControl>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Accession Number</TableCell>
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
                <TableCell>{book.Accession_Number}</TableCell>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.stream}</TableCell>
                <TableCell>{book.submissionDate}</TableCell>
                <TableCell>{book.pendingDays} days</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </card>
  );
}

export default BookTable;
