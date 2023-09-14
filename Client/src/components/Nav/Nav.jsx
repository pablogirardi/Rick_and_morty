import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <div>
      <Link to="/About">
        <button> ABOUT </button>
      </Link>
      <Link to="/Home">
        <button> HOME </button>
      </Link>
      <Link to="/Favorites">
        <button> FAVORITES </button>
      </Link>
      <nav>
        <SearchBar onSearch={onSearch} />
      </nav>
    </div>
  );
}
