import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Feedback submitted:");
    console.log("Feedback:", feedback);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Rating:", rating);
  };

  return (
    <Card>
      <CardContent>
        <Container maxWidth="sm">
          <Typography variant="h4">Feedback Form</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name..."
              margin="normal"
            />

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email..."
              margin="normal"
            />

            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel htmlFor="rating">Rating</InputLabel>
              <Select
                label="Rating"
                id="rating"
                name="rating"
                value={rating}
                onChange={handleRatingChange}
              >
                <MenuItem value={0}>Select a rating</MenuItem>
                <MenuItem value={1}>1 - Poor</MenuItem>
                <MenuItem value={2}>2 - Fair</MenuItem>
                <MenuItem value={3}>3 - Good</MenuItem>
                <MenuItem value={4}>4 - Very Good</MenuItem>
                <MenuItem value={5}>5 - Excellent</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Your Feedback"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Enter your feedback here..."
              margin="normal"
            />

            <Button type="submit" variant="contained" color="primary">
          Submit Feedback
            </Button>
          </form>
        </Container>
      </CardContent>
    </Card>
  );
};

export default feedback;
