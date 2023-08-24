/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import "./_search.css";
import SearchForm from "./SearchForm.jsx";
import SearchResults from "./SearchResults.jsx";

function Search () {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // You would typically make a backend API call here to fetch search results
    // For now, let's assume searchResultsData is an array of search results from the backend
    const searchResultsData = [
      { id: 1, name: "Author A", title: "Book X", bookId: "BX123" },
      { id: 2, name: "Author B", title: "Book Y", bookId: "BY456" }
      // ...
    ];
    setSearchResults(searchResultsData);
  };

  return (
    <div className="Search">
      <header className="Search-header">
        <SearchForm onSearch={handleSearch} />
        <SearchResults results={searchResults} />
      </header>
    </div>
  );
}

export default Search;
