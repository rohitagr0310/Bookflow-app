import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  Select,
  MenuItem
} from "@mui/material";
import axios from "axios";
import Typography from "@mui/material/Typography";
import "./StudentIssued.css";

function BookTable () {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSource, setSelectedSource] = useState("library"); // Default selection

  useEffect(() => {
    fetchDataFromBackend(selectedSource);
  }, [selectedSource]);

  const fetchDataFromBackend = async (source) => {
    try {
      // Make an API request to fetch book data with the selected source
      const response = await axios.post("/.netlify/functions/student-issued", {
        userid: localStorage.getItem("userId"),
        source // Send the selected source in the query
      });

      // Handle the response data as needed
      const data = response.data;

      setBooks(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data from backend:", error);
      setIsLoading(false);
    }
  };

  const handleSourceChange = (event) => {
    setSelectedSource(event.target.value);
  };

  // Function to calculate days remaining from the return date
  const calculateDaysRemaining = (returnDate) => {
    const currentDate = new Date();
    const returnDateObj = new Date(returnDate);
    const timeDifference = returnDateObj - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysRemaining > 0 ? `${daysRemaining} days` : "Overdue";
  };

  return (
    <div className="MainDiv">
      <Typography component="h2" variant="h6" gutterBottom fontFamily={"Montserrat"} className="text-issued">
        Issued Books
      </Typography>
      <FormControl className="MenuItems text-montserrat" bgcolor={"#ECF9FF"} >
        <Select
          bgcolor={"#ECF9FF"}
          value={selectedSource}
          onChange={handleSourceChange}
        >
          <MenuItem value="library" className="text-montserrat">Library</MenuItem>
          <MenuItem value="bookbank" className="text-montserrat">Book Bank</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper} className="TableContainer">
        <Table bgcolor={"#ECF9FF"} fontFamily={"Montserrat"}>
          <TableHead>
            <TableRow>
              <TableCell className="text-montserrat">ID</TableCell>
              <TableCell className="text-montserrat">Name</TableCell>
              <TableCell className="text-montserrat">Date of Submission</TableCell>
              <TableCell className="text-montserrat">Date Pending Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading
              ? (
                <TableRow>
                  <TableCell colSpan={5}>Loading...</TableCell>
                </TableRow>
              )
              : (
                books.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>{book.bookId}</TableCell>
                    <TableCell>{book.bookName}</TableCell>
                    <TableCell>{book.returnedDate}</TableCell>
                    <TableCell>
                      {calculateDaysRemaining(book.returnedDate)}
                    </TableCell>
                  </TableRow>
                ))
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BookTable;
