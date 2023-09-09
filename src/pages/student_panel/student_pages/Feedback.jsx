import React, { useState } from "react";
import "./_feedback.css"; import {
// Avatar,
// Box,
// Button,
// Card
// CardActions,
// CardContent
// Divider,
// Typography
} from "@mui/material";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0); // Initialize the rating state with 0

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
    setRating(parseInt(event.target.value)); // Convert the value to an integer
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Feedback submitted:");
    console.log("Feedback:", feedback);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Rating:", rating);
    // You can perform further actions like sending the feedback to a server here
  };

  return (
    <div className="feedback-container">
      <h1>Feedback Form</h1>
      <h3>What brings you to our website, and how is your experience been so far? <br></br> Share your thoughts and feedback with us! </h3>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name..."
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email..."
        />

        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          name="rating"
          value={rating}
          onChange={handleRatingChange}
        >
          <option value={0}>Select a rating</option>
          <option value={1}>1 - Poor</option>
          <option value={2}>2 - Fair</option>
          <option value={3}>3 - Good</option>
          <option value={4}>4 - Very Good</option>
          <option value={5}>5 - Excellent</option>
        </select>

        <label htmlFor="feedback">Your Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          rows="4"
          placeholder="Enter your feedback here..."
        />

        <button type="submit" onClick="document.getElementById('feedback').value = ''">Submit Feedback</button>
      </form>
    </div>

  );
};

export default FeedbackForm;
