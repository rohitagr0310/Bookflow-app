import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const useStyles = makeStyles((theme) => ({
  smallText: {
    fontSize: "0.8rem" // Adjust the font size as needed
  },
  contactButton: {
    fontSize: "0.8rem"
  },
  aboutUsButton: {
    cursor: "pointer",
    textDecoration: "underline",
    color: "white"
  },
  footer: {
    backgroundColor: "#00031A",
    color: "white",
    padding: theme.spacing(4, 0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  socialIconsContainer: {
    marginTop: theme.spacing(2),
    borderTop: "1px solid white", // Add a white line above the socialIconsContainer
    paddingTop: theme.spacing(2), // Add some top padding to separate it from the line
    display: "flex", // Remove flexDirection: "column" to keep icons on the same line
    alignItems: "center"
  },
  socialIcons: {
    fontSize: "2rem",
    margin: theme.spacing(0, 1),
    color: "white"
  },
  columnsContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  column: {
    flex: 1,
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: "center"
  },
  columnTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    textDecoration: "underline"
  },
  columnLink: {
    display: "block",
    color: "white",
    textDecoration: "none",
    marginBottom: theme.spacing(0.5),
    fontSize: "0.8rem"
  }
}));

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
