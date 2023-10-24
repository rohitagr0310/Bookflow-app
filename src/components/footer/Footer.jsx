import React from "react";
import { Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FaXTwitter } from "react-icons/fa6";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./_Footer.css";

/**
 * Footer component.
 * @returns {JSX.Element} Footer
 */
function Footer () {
  return (
    <footer
      style={{
        backgroundColor: "#FFD793",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        className="footer"
        style={{ width: "80vw", display: "flex", alignItems: "center" }}
      >
        <Typography
          variant="body2"
          align="center"
          style={{ fontSize: "1.4rem", fontWeight: "bold" }}
        >
          BookFlow
        </Typography>
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} BookFlow Library Management. All
          rights reserved.
        </Typography>
        <div id="iconButtons">
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
            <FaXTwitter />
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
      </div>
    </footer>
  );
}

export default Footer;
