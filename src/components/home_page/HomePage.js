import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Import ThemeProvider and createTheme
import useStyles from "./HomePageStyles";

const theme = createTheme(); // Create a theme instance

const HomePage = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}> {/* Wrap your component with ThemeProvider */}
      <div className={classes.root}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Welcome to BookFlow Library
          </Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
