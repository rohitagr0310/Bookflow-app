/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import "./_searchform.css"; // Add your CSS styles here

function SearchForm ({ onSearch }) {
  const [showFilters, setShowFilters] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [bookId, setBookId] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ name, title, bookId });
  };

  return (
    <div>
      <button onClick={() => setShowFilters(!showFilters)}>Search</button>
      {showFilters && (
        <form className="filter-form" onSubmit={handleSearch}>
          <label>
            Name:
            <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Title:
            <input type="text" placeholder="Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Book ID:
            <input type="text" placeholder="Book ID" required value={bookId} onChange={(e) => setBookId(e.target.value)} />
          </label>
          <button type="submit">Search</button>
        </form>
      )}
    </div>
  );
}

export default SearchForm;
