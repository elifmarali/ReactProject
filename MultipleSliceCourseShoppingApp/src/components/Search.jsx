import React from "react";
import { useDispatch } from "react-redux";
import { changeSearch } from "../redux/Slice/courseSlice";

function Search() {
  const dispatch = useDispatch();
  return (
    <div className="search">
      <div className="searchText">My Basket</div>
      <div className="searchRight">
        <label className="searchLabel">Search</label>
        <input
          className="formInput"
          onChange={(e) => dispatch(changeSearch(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Search;
