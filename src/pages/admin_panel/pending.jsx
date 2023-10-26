/* eslint-disable require-jsdoc */
import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

// Generate Order Data
function createData (id, date, rollNo, name, bookName, pendingDate) {
  return { id, date, rollNo, name, bookName, pendingDate };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "1",
    "anshika jain",
    "rd sharma",
    "12-12-12"
  ),
  createData(
    1,
    "16 Mar, 2019",
    "2",
    "Paul McCartney",
    "c++",
    "12-12-13"
  ),
  createData(2,
    "16 Mar, 2019",
    "3",
    "Tom Scholz",
    "java",
    "12-12-14"
  ),
  createData(
    3,
    "16 Mar, 2019",
    "4",
    "Michael Jackson",
    "python",
    "12-12-15"
  ),
  createData(
    4,
    "15 Mar, 2019",
    "4",
    "Bruce Springsteen",
    "ansi",
    "12-12-15"
  )
];

function preventDefault (event) {
  event.preventDefault();
}

export default function Orders () {
  return (
    <React.Fragment><Typography component="h2" variant="h6" color="#000000" gutterBottom>
      Pending Issues
    </Typography>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Date of Issue</TableCell>
          <TableCell>Roll no.</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Book Name</TableCell>
          <TableCell align="right">Return Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.rollNo}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.bookName}</TableCell>
            <TableCell align="right">{row.pendingDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more
    </Link>
    </React.Fragment>
  );
}
