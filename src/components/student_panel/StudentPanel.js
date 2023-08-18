import React from "react";
import Header from "./Studentheader";
import BookCard from "../card/Bookcard"; // Import the BookCard component
import { Grid } from "@mui/material"; // Import Grid component for layout

export const fakeBooks = [
  {
    title: "Book 1",
    author: "Author 1",
    description: "Description for Book 1",
    coverImage: "https://example.com/book1.jpg",
    available: true
  },
  {
    title: "Book 2",
    author: "Author 2",
    description: "Description for Book 2",
    coverImage: "https://example.com/book2.jpg",
    available: true
  },
  {
    title: "Book 3",
    author: "Author 3",
    description: "Description for Book 3",
    coverImage: "https://example.com/book3.jpg",
    available: true
  },
  {
    title: "Book 4",
    author: "Author 4",
    description: "Description for Book 4",
    coverImage: "https://example.com/book4.jpg",
    available: true
  },
  {
    title: "Book 5",
    author: "Author 5",
    description: "Description for Book 5",
    coverImage: "https://example.com/book5.jpg",
    available: true
  },
  {
    title: "Book 6",
    author: "Author 6",
    description: "Description for Book 6",
    coverImage: "https://example.com/book6.jpg",
    available: true
  },
  {
    title: "Book 7",
    author: "Author 7",
    description: "Description for Book 7",
    coverImage: "https://example.com/book7.jpg",
    available: true
  },
  {
    title: "Book 8",
    author: "Author 8",
    description: "Description for Book 8",
    coverImage: "https://example.com/book8.jpg",
    available: true
  },
  {
    title: "Book 9",
    author: "Author 9",
    description: "Description for Book 9",
    coverImage: "https://example.com/book9.jpg",
    available: true
  },
  {
    title: "Book 10",
    author: "Author 10",
    description: "Description for Book 10",
    coverImage: "https://example.com/book10.jpg",
    available: true
  },
  {
    title: "Book 11",
    author: "Author 11",
    description: "Description for Book 11",
    coverImage: "https://example.com/book11.jpg",
    available: true
  },
  {
    title: "Book 12",
    author: "Author 12",
    description: "Description for Book 12",
    coverImage: "https://example.com/book12.jpg",
    available: true
  },
  {
    title: "Book 13",
    author: "Author 13",
    description: "Description for Book 13",
    coverImage: "https://example.com/book13.jpg",
    available: true
  },
  {
    title: "Book 14",
    author: "Author 14",
    description: "Description for Book 14",
    coverImage: "https://example.com/book14.jpg",
    available: true
  },
  {
    title: "Book 15",
    author: "Author 15",
    description: "Description for Book 15",
    coverImage: "https://example.com/book15.jpg",
    available: false
  }
];

const StudentPanel = () => {
  return (
    <div>
      <Header />
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
