import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import "../styles/Product.css";
function ProductList() {
  const { productList } = useSelector((store) => store.product);
  const params = useParams();
  console.log(params);
  return (
    <>
      {" "}
      <SearchBar />
      <Navbar />
      <div className="productList">
        {productList.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
