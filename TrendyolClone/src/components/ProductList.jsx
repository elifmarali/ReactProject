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
    searchList,
    search,
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
    } else if (search && searchList.length > 0) {
      setProducts(searchList);
    } else if (search && searchList.length === 0) {
      setProducts([]); // Ensure to set products to empty array
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
    search,
    searchList,
  ]);

  return (
    <div className="productListContainer">
      <SearchBar />
      <Navbar />
      {search ? (
        <div className="productList">
          {searchList.map((product, index) => (
            <Product
              product={product}
              key={`product-${product.id}-${index}`}
              className="popularItem"
            />
          ))}
        </div>
      ) : (
        <div className="productList">
          {products.length === 0 && search === true ? (
            <div>Aradığınız isimde bir ürün bulunamadı...</div>
          ) : (
            products.map((product, index) => (
              <Product
                product={product}
                key={`product-${paramFormat}-${product.id}-${index}`}
                className="popularItem"
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
export default ProductList;
