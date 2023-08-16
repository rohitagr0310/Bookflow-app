import React from "react";
import BookCard from "../card/Bookcard"; // Import the BookCard component
import { Grid } from "@mui/material"; // Import Grid component for layout

const fakeBooks = [
  {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  }, {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  }, {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  }, {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  }, {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  }, {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  }, {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  }, {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  }, {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  }, {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  }, {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  }, {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  }, {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  }, {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  },
  {
    title: "Book 10",
    author: "Author 10",
    description: "Description for Book 10",
    coverImage: "https://example.com/book10.jpg",
    available: false
  }
];

const StudentPanel = () => {
  return (
    <div>
      <h1>Student Panel</h1>
      <Grid container spacing={2}>
        {fakeBooks.map((book, index) => (
          <Grid item key={index}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StudentPanel;
