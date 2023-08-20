import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useStyles from "./_Header.sass";

const theme = createTheme();

const Header = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.headerText}>
            <Link to="/" className={classes.headerLink}>
              BookFlow
            </Link>
          </Typography>

          <Link
            to="/login"
            className={`${classes.headerLink} ${classes.loginLink}`}
          >
            Login
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
