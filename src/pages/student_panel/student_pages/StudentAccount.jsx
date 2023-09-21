import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const initialFormData = {
  username: "",
  password: "",
  rollNumber: "",
  email: "",
  semesterYear: "",
  phoneNumber: ""
};

const StudentAccount = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleSaveClick = () => {
    // Here, you can implement logic to save the updated data
    // For simplicity, we're just logging the updated data
    console.log("Updated Data:", formData);
    setIsEditing(false);
  };

  return (
    <CardContent>
      <Paper elevation={3} style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
        <Typography variant="h5" gutterBottom>
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
            disabled={!isEditing}
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
            name="semesterYear"
            label="Semester/Year"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.semesterYear}
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
              <Button variant="contained" color="primary" onClick={handleSaveClick}>
            Save
              </Button>
            )
            : (
              <Button variant="contained" color="primary" onClick={handleEditClick}>
            Edit
              </Button>
            )}
        </form>
      </Paper>
    </CardContent>
  );
};

export default StudentAccount;
