import React, { useState } from "react";
import { Container, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useStyles from "./_Footer.sass";

/**
 * Footer component.
 * @returns {JSX.Element} Footer
 */
function Footer () {
  const classes = useStyles();
  const [showAboutUsText, setShowAboutUsText] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const toggleAboutUsText = () => {
    setShowAboutUsText(!showAboutUsText);
  };
  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.columnsContainer}>
          <div className={classes.column}>
            <Typography variant="h6" className={classes.columnTitle}>
              {/* Render "About Us" as a clickable element */}
              <span onClick={toggleAboutUsText} className={classes.aboutUsButton}>
                About Us
              </span>
            </Typography>
            {/* Render additional text conditionally */}
            {showAboutUsText && (
              <p className={classes.smallText}>
                Our Library Management WebApp simplifies the process of borrowing and returning
                books, making the library experience seamless and efficient.
              </p>
            )}
            <a onClick={toggleContactInfo} className={classes.contactButton}>
              Contact
            </a>
            {showContactInfo && (
              <div>
                <p className={classes.smallText} >Contact Information:</p>
                <p className={classes.smallText}>Email: contact@example.com</p>
                <p className={classes.smallText}>Phone: +1 (123) 456-7890</p>
              </div>
            )}
            <a href="http://localhost:3002/#" className={classes.columnLink}>
              Home
            </a>
            <a href="#" className={classes.columnLink}>
              Services
            </a>
            <a href="#" className={classes.columnLink}>
              Blog
            </a>
            <a href="#" className={classes.columnLink}>
              FAQ
            </a>
          </div>
          <div className={classes.column}>
            <Typography variant="h6" className={classes.columnTitle}>
              Support
            </Typography>
            <a href="#" className={classes.columnLink}>
              Help Centre
            </a>
            <a href="#" className={classes.columnLink}>
              Terms
            </a>
            <a href="#" className={classes.columnLink}>
              Privacy
            </a>
            <a href="#" className={classes.columnLink}>
              Security
            </a>
            <a href="#" className={classes.columnLink}>
              Sitemap
            </a>
          </div>
          <div className={classes.column}>
            <Typography variant="h6" className={classes.columnTitle}>
              Career
            </Typography>
            <a href="#" className={classes.columnLink}>
              Press
            </a>
            <a href="#" className={classes.columnLink}>
              Partner
            </a>
            <a href="#" className={classes.columnLink}>
              Investors
            </a>
            <a href="#" className={classes.columnLink}>
              Advertise
            </a>
            <a href="#" className={classes.columnLink}>
              Affiliate
            </a>
          </div>
        </div>
        <div className={classes.socialIconsContainer}>
          <IconButton href="https://www.facebook.com/technonjr"
            target="_blank"color="inherit" className={classes.socialIcons}>
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://twitter.com/TechnoIndiaNJR"
            target="_blank"color="inherit" className={classes.socialIcons}>
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/school/technonjr/"
            target="_blank" color="inherit" className={classes.socialIcons}>
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
