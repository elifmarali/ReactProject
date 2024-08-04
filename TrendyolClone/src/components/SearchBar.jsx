import React, { useEffect, useState } from "react";
import logo from "../assets/logo3.svg";
import "../styles/SearchBar.css";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { searchProduct } from "../redux/Product/productSlice";

function SearchBar() {
  const { quantity } = useSelector((store) => store.basket);
  const { productList, search } = useSelector((store) => store.product);
  const [searchInput, setSearchInput] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setSearchInput("");
  }, [location]);
  useEffect(() => {
    dispatch(searchProduct(searchInput));
  }, [searchInput, dispatch]);
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="searchContainer">
      <img
        src={logo}
        alt="logo resmi"
        className="logo"
        onClick={() => nav("/")}
      />
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Aradığınız ürün, kategoriyi yazın"
          className="searchInput"
          onChange={(e) => handleSearchInput(e)}
          value={searchInput}
        />
        <IoIosSearch className="searchIcon" />
      </div>

      <div className="rightSearch">
        <div
          className="basket"
          onClick={() => {
            nav("/basket");
          }}
        >
          <div className="basketText"> Sepetim</div>
          <div className="quantity">{quantity}</div>
          <SlBasket className="basketIcon" />
        </div>
        <div className="basket" onClick={() => nav("/favorite")}>
          <div className="basketText">Favoriler</div>
          <CiHeart className="favoriteIcon" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
