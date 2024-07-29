import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { useLocation, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import "../styles/Product.css";
import {
  getBestSellingList,
  getEnCokEklenenlerList,
  getFlashList,
} from "../redux/Product/productSlice";
import "../styles/ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const {
    popularList,
    flashList,
    bestSellingList,
    categoryStatus,
    categoryProducts,
  } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const { category } = useParams();
  let paramFormat = category ? category.toLowerCase() : "";
  const location = useLocation();

  useEffect(() => {
    setProducts([]);
  }, [location]);

  useEffect(() => {
    if (paramFormat === "encokeklenenler") {
      setProducts(popularList);
    } else if (paramFormat === "encokonecıkanlar") {
      setProducts(bestSellingList);
    } else if (paramFormat === "flash") {
      setProducts(flashList);
    } else if (categoryStatus === "success") {
      setProducts(categoryProducts);
    } else {
      setProducts([]);
    }
  }, [
    popularList,
    flashList,
    bestSellingList,
    categoryProducts,
    categoryStatus,
    paramFormat,
  ]);

  return (
    <div className="productListContainer">
      <SearchBar />
      <Navbar />
      <div className="productList">
        {products?.map((product, index) => (
          <Product
            product={product}
            key={`product-${paramFormat}-${product.id}-${index}`}
            className="popularItem"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
