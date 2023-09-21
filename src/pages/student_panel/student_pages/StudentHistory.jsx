import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Card, CardContent, FormControl, Select, MenuItem, Grid } from "@mui/material";

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
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography component="h2" variant="h6" gutterBottom>
        Books detais
          </Typography>

          <FormControl>
            <Grid>
              <Select/* value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)} */>
                <MenuItem value="test">test</MenuItem>
                <MenuItem value="library">Library</MenuItem>
              </Select>
            </Grid>
          </FormControl>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Issued Date</TableCell>
                  <TableCell>Submition Date</TableCell>
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
          </TableContainer>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
