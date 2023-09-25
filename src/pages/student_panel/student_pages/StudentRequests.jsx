import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Card, CardContent, Select, MenuItem, Grid, FormControl } from "@mui/material";
import axios from "axios"; // Import axios library

export default function StudentRequests () {
  const [selectedTable, setSelectedTable] = useState("issue");
  const [requestData, setRequestData] = useState([]); // State to store the request data

  useEffect(() => {
    fetchDataFromBackend(selectedTable);
  }, [selectedTable]);

  const fetchDataFromBackend = async (requestType) => {
    try {
      // Make an API request to fetch request data based on the selected request type
      const response = await axios.post("/.netlify/functions/student-requests", {
        userid: localStorage.getItem("userId"),
        requestType // Send the selected request type in the query
      });

      // Handle the response data as needed
      const data = response.data;
      setRequestData(data);
    } catch (error) {
      console.error("Error fetching data from backend:", error);
    }
  };

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography component="h2" variant="h6" gutterBottom>
            Books Requests
          </Typography>
          <FormControl>
            <Grid container spacing={1}>
              <Select
                value={selectedTable}
                onChange={(e) => setSelectedTable(e.target.value)}
              >
                <MenuItem value="issue">Issue</MenuItem>
                <MenuItem value="return">Return</MenuItem>
              </Select>
            </Grid>
          </FormControl>
          <br />
          <Grid container spacing={1}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Accession</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requestData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.bookName}</TableCell>
                    <TableCell>{row.accession}</TableCell>
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
