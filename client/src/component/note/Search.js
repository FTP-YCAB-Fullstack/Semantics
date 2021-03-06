import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        className="rounded-md py-1 px-3"
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
