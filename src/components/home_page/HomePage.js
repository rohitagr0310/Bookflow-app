import React from "react";
import Header from "../header/Header";
import BookCard from "../card/Bookcard"; // Assuming you have a BookCard component
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useStyles from "./HomePageStyles"; // Add your own styles
import { fakeBooks } from "../student_panel/StudentPanel"; // Import the fakeBooks data from StudentPanel.js

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h4" gutterBottom>
          Welcome to BookFlow Library
        </Typography>
        <Grid container spacing={3}>
          {fakeBooks.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
