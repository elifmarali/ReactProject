import React from "react";
import Detail from "../components/Detail";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import "../styles/ProductDetail.css";

function ProductDetails() {
  return (
    <div className="productDetail">
      <SearchBar />
      <Navbar />
      <Detail />
    </div>
  );
}

export default ProductDetails;
