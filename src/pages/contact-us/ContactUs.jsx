import React from "react";
import "./ContactUs.css";
import image from "../../images/vector6.png";

function ContactUs () {
  return (
    <div className="contact-us">
      <h1> Contact Us </h1>
      <div className="contact-details">
        <div className="contact-content">
          <div className="contact-name">
            <h2>Adarsh Kumar Regar</h2>
            <i>
              M.A., M.Lib.Sc., N.E.T., P.G.D.C.A.
              <br />
              Librarian
            </i>
          </div>
          <div className="contact-detail">
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
        <div className="contact-image">
          <img src={image} alt="Library" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
