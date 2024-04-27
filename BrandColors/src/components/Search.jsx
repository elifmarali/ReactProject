import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import MainContext from "../context/MainContext";

function Search() {
  const { search, setSearch } = useContext(MainContext);
  return (
    <div className="search">
      <IoSearch className="searchIcon" />
      <input
        type="text"
        placeholder="Search Brands..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
