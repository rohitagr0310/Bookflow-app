/* eslint-disable react/prop-types */
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./_BookCard.css";

const BookCard = ({ book }) => {
  return (
    <Card className="card">
      <CardMedia
        className="media"
        component="img"
        image={book.coverImage}
        alt={book.title}
      />
      <CardContent className="content">
        <Typography className="title" variant="h6" gutterBottom>
          {book.title}
        </Typography>
        <Typography className="author" variant="body2">
          {book.author}
        </Typography>
        <Typography className="description" variant="body2">
          {book.description}
        </Typography>
        <Typography className="availability" variant="body2">
          Available: {book.available ? "Yes" : "No"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
