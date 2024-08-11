import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form class="search-form">
      <input
        type="search"
        placeholder="Enter a city…"
        class="search-input-text"
        id="search-input-text"
      />
      <input type="submit" value="Search" class="search-input-button" />
    </form>
  );
}
