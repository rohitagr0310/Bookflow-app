/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from "react";
import "./_searchresults.css";

function SearchResults ({ results }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <strong>Name:</strong> {result.name}, <strong>Title:</strong> {result.title}, <strong>Book ID:</strong> {result.bookId}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
