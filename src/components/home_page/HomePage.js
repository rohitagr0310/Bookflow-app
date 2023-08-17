import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useStyles from "./HomePageStyles";

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h4" gutterBottom>
          Welcome to BookFlow Library
        </Typography>
      </Container>
    </div>
  );
};

export default HomePage;
