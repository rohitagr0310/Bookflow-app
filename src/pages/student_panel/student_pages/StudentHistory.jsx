import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Card, CardContent, Select, MenuItem, Grid, FormControl } from "@mui/material";

// eslint-disable-next-line require-jsdoc
function generateData () {
  // Generate sample data for the table
  const data = [];
  for (let i = 1; i <= 25; i++) {
    data.push({
      id: i,
      name: `Item ${i}`,
      description: `Description ${i}`,
      quantity: Math.floor(Math.random() * 10) + 1
    });
  }
  return data;
}

const tableData = generateData();

// eslint-disable-next-line require-jsdoc
export default function StudentHistory () {
  const [selectedTable, setSelectedTable] = useState("test"); // Initialize selectedTable state

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography component="h2" variant="h6" gutterBottom>
            Books details
          </Typography>
          <FormControl>
            <Grid container spacing={1}>
              <Select
                value={selectedTable}
                onChange={(e) => setSelectedTable(e.target.value)}
              >
                <MenuItem value="test">test</MenuItem>
                <MenuItem value="library">Library</MenuItem>
                <MenuItem value="bookbank">Book Bank</MenuItem>
              </Select>
            </Grid>
          </FormControl>
          <br/>
          <Grid container spacing={1}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
