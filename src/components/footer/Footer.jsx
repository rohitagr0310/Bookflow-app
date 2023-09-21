import React from "react";
import { Container, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./_Footer.css";
import { Link } from "react-router-dom";

/**
 * Footer component.
 * @returns {JSX.Element} Footer
 */
function Footer () {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <div className="columnsContainer">
          <div className="column">
            <Typography variant="h6" className="columnTitle">
              <Link to="/about-us">About Us</Link>
            </Typography>
            <a href="#" className="columnLink">
              Contact
            </a>
            <a href="/" className="columnLink">
              Home
            </a>
            <a href="#" className="columnLink">
              Services
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
          </div>
          <div className="column">
            <Typography variant="h3" className="logo">
              BookFlow
            </Typography>
          </div>
        </div>
        <div className="socialIconsContainer">
          <IconButton href="https://www.facebook.com/technonjr" target="_blank" color="inherit" className="socialIcons">
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://twitter.com/TechnoIndiaNJR" target="_blank" color="inherit" className="socialIcons">
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/school/technonjr/" target="_blank" color="inherit" className="socialIcons">
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
