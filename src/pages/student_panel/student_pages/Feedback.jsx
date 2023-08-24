import React, { useState } from "react";
import "./_feedback.css"; // Import the CSS file for styling

const Feedback = () => {
  const [formData] = useState({
    name: "",
    email: "",
    libraryCardNumber: ""
    // Other form fields...
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission or API call here
    console.log(formData);
  };

  return (
    <div className="feedback-container">
      <h1 className="form-title">[Library Name] Feedback Form</h1>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
