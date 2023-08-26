import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./_Footer.css";

/**
 * Footer component.
 * @returns {JSX.Element} Footer
 */
function Footer () {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <div className="columnsContainer">
          <div className="column">
            <Typography variant="h6" className="columnTitle">
              {/* Render "About Us" as a clickable element */}
              <Link to="/about-us" className="aboutUsButton">
                About Us
              </Link>
            </Typography>
            {/* Render additional text conditionally */}
            <a onClick={toggleContactInfo} className="contactButton">
              Contact
            </a>
            {showContactInfo && (
              <div>
                <p className="smallText" >Contact Information:</p>
                <p className="smallText">Email: contact@example.com</p>
                <p className="smallText">Phone: +1 (123) 456-7890</p>
              </div>
            )}
            <a href="http://localhost:3000" className="columnLink">
              Home
            </a>
            <a href="#" className="columnLink">
              Services
            </a>
            <a href="#" className="columnLink">
              Blog
            </a>
            <a href="#" className="columnLink">
              FAQ
            </a>
          </div>
          <div className="column">
            <Typography variant="h6" className="columnTitle">
              Support
            </Typography>
            <a href="#" className="columnLink">
              Help Centre
            </a>
            <a href="#" className="columnLink">
              Terms
            </a>
            <a href="#" className="columnLink">
              Privacy
            </a>
            <a href="#" className="columnLink">
              Security
            </a>
            <a href="#" className="columnLink">
              Sitemap
            </a>
          </div>
          <div className="column">
            <Typography variant="h6" className="columnTitle">
              Career
            </Typography>
            <a href="#" className="columnLink">
              Press
            </a>
            <a href="#" className="columnLink">
              Partner
            </a>
            <a href="#" className="columnLink">
              Investors
            </a>
            <a href="#" className="columnLink">
              Advertise
            </a>
            <a href="#" className="columnLink">
              Affiliate
            </a>
          </div>
        </div>
        <div className="socialIconsContainer">
          <IconButton href="https://www.facebook.com/technonjr"
            target="_blank"color="inherit" className="socialIcons">
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://twitter.com/TechnoIndiaNJR"
            target="_blank"color="inherit" className="socialIcons">
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/school/technonjr/"
            target="_blank" color="inherit" className="socialIcons">
            <LinkedInIcon />
          </IconButton>
        </div>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} BookFlow Library Management. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}
export default Footer;
