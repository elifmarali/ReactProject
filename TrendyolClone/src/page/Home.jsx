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

function Home() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { total } = useSelector((store) => store.basket);
  useEffect(() => {
    console.log(total);
  }, [total]);

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
        <ColorfulBar />
        <PopularProduct />
        <FlashProducts />
        <BestSellingProducts />
      </div>
      <Footer />
    </>
  );
}

export default Home;
