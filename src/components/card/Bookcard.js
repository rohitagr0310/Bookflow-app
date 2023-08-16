/* eslint-disable react/prop-types */
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import useStyles from "./BookCardStyles"; // Import the styles from your file

const BookCard = ({ book }) => {
  const classes = useStyles(); // Apply the styles using makeStyles

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        component="img"
        image={book.coverImage}
        alt={book.title}
      />
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h6" gutterBottom>
          {book.title}
        </Typography>
        <Typography className={classes.author} variant="body2">
          {book.author}
        </Typography>
        <Typography className={classes.description} variant="body2">
          {book.description}
        </Typography>
        <Typography className={classes.availability} variant="body2">
          Available: {book.available ? "Yes" : "No"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
