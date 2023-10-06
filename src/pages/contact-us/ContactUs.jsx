import React from "react";
import "./ContactUs.css";

function ContactUs () {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-form">
          <h2>Send Your Request</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="reach-us">
          <h2>Reach Us</h2>
          <div className="contact-details">
            <div className="contact-name">
              <h2>Adarsh Kumar Regar</h2>
              <i>
                M.A., M.Lib.Sc., N.E.T., P.G.D.C.A.
                <br />
                Librarian
              </i>
            </div>
            <div className="contact-info">
              <span>Email:</span>
              <a href="mailto:adarsh.regar@technonjr.org">adarsh.regar@technonjr.org</a>
            </div>
            <div className="contact-info">
              <span>Phone Number:</span>
              <a href="tel:+919876543210">+919876543210</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
