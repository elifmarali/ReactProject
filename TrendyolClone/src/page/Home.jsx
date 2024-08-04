import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import "../styles/Home.css";
import {
  getProductList,
  resetProductList,
} from "../redux/Product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ColorfulBar from "../components/ColorfulBar";
import PopularProduct from "../components/PopularProducts";
import FlashProducts from "../components/FlashProducts";
import BestSellingProducts from "../components/BestSellingProducts";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Product from "../components/Product";

function Home() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { search, searchList } = useSelector((store) => store.product);
  useEffect(() => {
    dispatch(getProductList());
  }, [location]);
  useEffect(() => {
    dispatch(resetProductList());
  }, [location]);

  return (
    <>
      <div className="home">
        <SearchBar />
        <Navbar />
        {search === true ? (
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
          <>
            <ColorfulBar />
            <PopularProduct />
            <FlashProducts />
            <BestSellingProducts />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
