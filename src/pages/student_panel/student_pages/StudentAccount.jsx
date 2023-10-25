import React, { useState, useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import axios from "axios";

const initialFormData = {
  username: "",
  password: "",
  rollNumber: "",
  email: "",
  phoneNumber: ""
};

const StudentAccount = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isEditing, setIsEditing] = useState(false);

  // For example, call it when the component mounts
  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  const fetchDataFromBackend = async () => {
    try {
      const userid = localStorage.getItem("userId");

      const response = await axios.post("/.netlify/functions/student-get-account", {
        userid
      });

      // Handle the response data as needed
      const data = response.data[0];

      const updatedFormData = {
        username: data.name,
        password: data.password,
        rollNumber: data.rollnumber,
        email: data.email,
        phoneNumber: data.phone_number
      };

      console.log(updatedFormData);

      // Update the formData state with the fetched data
      setFormData(updatedFormData);
    } catch (error) {
      console.error("Error fetching data from backend:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
    // Prepare the data to be sent to the backend
      const updatedData = {
        name: formData.username,
        password: formData.password,
        rollnumber: formData.rollNumber,
        email: formData.email,
        phone_number: formData.phoneNumber
      // Add any other fields you want to update
      };

      // Make a POST request to your backend to update the user data
      const response = await axios.post("/.netlify/functions/student-post-account", {
        userid: localStorage.getItem("userId"),
        updatedData
      });

      // Check the response status and handle accordingly
      if (response.status === 200) {
      // Data successfully updated
        console.log("Data updated successfully:", response.data);

        // Disable editing mode after saving
        setIsEditing(false);
      } else {
      // Handle errors or show an error message
        console.error("Error updating data:", response.data);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <CardContent>
      <Paper elevation={3} style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <Typography variant="h5" sx={{ fontFamily: "Dela Gothic One" }} gutterBottom>
        Account Information
        </Typography>
        <form>
          <TextField
            name="username"
            label="Username"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.username}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <TextField
            name="password"
            label="Password"
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            disabled={true}
          />
          <TextField
            name="rollNumber"
            label="Roll Number"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.rollNumber}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <TextField
            name="email"
            label="Email ID"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <TextField
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            disabled={!isEditing}
          />

          {isEditing
            ? (
              <Button variant="contained" color="primary" onClick={handleSaveClick}
                sx={{ marginTop: "16px", backgroundColor: "#68967D", fontFamily: "Roboto", ":hover": { backgroundColor: "#000000" } }}>
            Save
              </Button>
            )
            : (
              <Button variant="contained" color="primary" onClick={handleEditClick}
                sx={{ marginTop: "16px", backgroundColor: "#68967D", fontFamily: "Roboto", ":hover": { backgroundColor: "#000000" } }}>
            Edit
              </Button>
            )}
        </form>
      </Paper>
    </CardContent>
  );
};

export default StudentAccount;
