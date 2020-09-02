import React from "react";
import "./searchbox.style.css";

const SearchBox = (params) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={params.placeholder}
      onChange={params.handleChange}
    />
  );
};

export default SearchBox;
