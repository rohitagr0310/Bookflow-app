import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import "./_ContactUs.css";

/**
 * ContactUs Component - A component for the Contact Us page with a feedback form.
 *
 * @component
 */
function ContactUs () {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+"
  };
  /**
   * Get the label text for a given rating value.
   *
   * @param {number} value - The rating value.
   * @returns {string} The label text.
   */
  function getLabelText (value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const [value, setValue] = React.useState(null);
  const [hover, setHover] = React.useState(-1);

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>

      {/* Contact Information Section */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Contact No:</strong> +91 123-456-7890
        </p>
        <p>
          <strong>Address:</strong> Techno India NJR Institute of Technology
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:contact@example.com">admin@bookflow.com</a>
        </p>
      </div>

      <div className="white"></div>

      <h2 className="feedback">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <Box className="rating">
          <Rating
            name="size-large"
            size="large"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
        </Box>

        <div>
          <label htmlFor="message">Feedback: </label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
