/* eslint-disable require-jsdoc */
import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography, Link } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: theme.palette.grey[200]
  }
}));
/**
 * Footer component.
 * @returns {JSX.Element} Footer
 */

function Footer () {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; {new Date().getFullYear()} YourCompany Name. All rights
          reserved.
          <br />
          <Link color="inherit" href="/privacy-policy">
            Privacy Policy
          </Link>
          {" | "}
          <Link color="inherit" href="/terms-of-use">
            Terms of Use
          </Link>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
