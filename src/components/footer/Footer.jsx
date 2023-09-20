import React from "react";
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
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <div className="columnsContainer">
          <div className="column">
            <div className="linksWrapper">
              <a href="/about-us" className="columnLink">
                About Us
              </a>
              <a href="/" className="columnLink">
                Home
              </a>
              <a href="#" className="columnLink">
                Contact
              </a>
              <a href="#" className="columnLink">
                Services
              </a>
              <a href="/terms-and-conditions" className="columnLink">
                Terms
              </a>
            </div>
          </div>
          <div className="column">
            <Typography variant="h3" className="logo">
              BookFlow
            </Typography>
          </div>
        </div>
        <div className="socialIconsContainer">
          <IconButton
            href="https://www.facebook.com/technonjr"
            target="_blank"
            color="inherit"
            className="socialIcons"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            href="https://twitter.com/TechnoIndiaNJR"
            target="_blank"
            color="inherit"
            className="socialIcons"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/school/technonjr/"
            target="_blank"
            color="inherit"
            className="socialIcons"
          >
            <LinkedInIcon />
          </IconButton>
        </div>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} BookFlow Library Management. All
          rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
