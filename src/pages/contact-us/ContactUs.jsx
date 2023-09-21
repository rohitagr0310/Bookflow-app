import React from "react";
import "./ContactUs.css";

function ContactUs () {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item">
          Email:
          <a href="mailto:adarsh.regar@technonjr.org">adarsh.regar@technonjr.org</a>
        </div>
        <div className="contact-item">
          Phone Number:
          <a href="tel:+919876543210">+91 9876543210</a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
