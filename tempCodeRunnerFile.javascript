import React from 'react';
import BookCard from './book-card'; // Adjust the import path

const BookList = () => {
  const handleCardClick = () => {
    // Handle card click here
  };

  return (
    <div>
      <BookCard
        title="Sample Book Title"
        author="John Doe"
        coverImage="https://example.com/book-cover.jpg"
        onClick={handleCardClick}
      />
      {/* Add more BookCard components with different data */}
    </div>
  );
};

export default BookList;
