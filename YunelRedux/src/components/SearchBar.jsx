import React from "react";
import logo from "../assets/logo.png";
import "../styles/SearchBar.css";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";

function SearchBar() {
  const { quantity } = useSelector((store) => store.cart);
  return (
    <div className="searchContainer">
      <img src={logo} alt="logo resmi" className="logo" />
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Aradığınız ürün, kategoriyi yazın"
          className="searchInput"
        />
        <IoIosSearch className="searchIcon" />
      </div>

      <div className="rightSearch">
        <div className="basket">
          <div className="basketText"> Sepetim</div>
          <div className="quantity">{quantity}</div>
          <SlBasket className="basketIcon" />
        </div>
        <div className="basket">
          <div className="basketText">Favoriler</div>
          <CiHeart className="favoriteIcon" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
