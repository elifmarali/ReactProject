import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import "../styles/Product.css";

function ProductList() {
  const { productList } = useSelector((store) => store.product);
  const param = useParams(); // Extract category from params

  return (
    <>
      <SearchBar />
      <Navbar />
      <div className="productList">
        {productList
          .filter((product) => product.category === param) // Filter products by category
          .map((product) => (
            <Product
              product={product}
              key={`product-${product.id}`}
              className="product"
            />
          ))}
      </div>
    </>
  );
}

export default ProductList;
