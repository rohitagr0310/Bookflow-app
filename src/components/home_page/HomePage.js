import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Import ThemeProvider and createTheme
import useStyles from "./HomePageStyles";
import Header from "./header/Header";
const theme = createTheme();

const HomePage = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header />
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
