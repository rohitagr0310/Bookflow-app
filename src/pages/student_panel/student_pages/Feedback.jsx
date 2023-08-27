import React, { useState } from "react";
import "./_feedback.css";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Feedback submitted:", feedback);
    // You can perform further actions like sending the feedback to a server here
  };

  return (
    <div className="feedback-container">
      <h1>Feedback Form</h1>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label htmlFor="feedback">Your Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          rows="4"
          placeholder="Enter your feedback here..."
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
