import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Card, CardContent, Select, MenuItem, Grid, FormControl } from "@mui/material";
import axios from "axios";

// eslint-disable-next-line require-jsdoc
export default function StudentHistory () {
  const [selectedTable, setSelectedTable] = useState("library"); // Initialize selectedTable state
  const [historyData, setHistoryData] = useState([]); // Initialize historyData state

  const fetchData = async (selectedOption) => {
    try {
      const userid = localStorage.getItem("userId");

      const response = await axios.post("/.netlify/functions/student-history", {
        userid,
        source: selectedOption // Pass the selected option to the backend
      });

      // Handle the response data as needed
      const data = response.data;

      // Update the historyData state with the fetched data
      setHistoryData(data);
    } catch (error) {
      console.error("Error fetching data from backend:", error);
    }
  };

  // Call fetchData when the component mounts or when selectedTable changes
  useEffect(() => {
    fetchData(selectedTable);
  }, [selectedTable]);

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography component="h2" variant="h6" gutterBottom>
            Books details
          </Typography>
          <FormControl sx={{ padding: "0 0 1em 0" }}>
            <Grid container spacing={1}>
              <Select
                value={selectedTable}
                onChange={(e) => setSelectedTable(e.target.value)}
              >
                <MenuItem value="library" sx={{ ":hover": { backgroundColor: "#a7dbbf" } }}>Library</MenuItem>
                <MenuItem value="bookbank" sx={{ ":hover": { backgroundColor: "#a7dbbf" } }}>Book Bank</MenuItem>
              </Select>
            </Grid>
          </FormControl>
          <br />
          <Grid container spacing={1}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Book ID</TableCell>
                  <TableCell>Book Name</TableCell>
                  <TableCell>Issue Date</TableCell>
                  <TableCell>Returned Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {historyData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.bookId}</TableCell>
                    <TableCell>{row.bookName}</TableCell>
                    <TableCell>{row.issueDate}</TableCell>
                    <TableCell>{row.returnedDate}</TableCell>
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
