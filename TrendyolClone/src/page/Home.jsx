import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import "../styles/Home.css";
import { getProductList } from "../redux/Product/productSlice";
import { useDispatch } from "react-redux";
import ProductList from "../components/ProductList";
import ColorfulBar from "../components/ColorfulBar";
import PopularProduct from "../components/PopularProducts";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
  return (
    <div className="home">
      <SearchBar />
      <Navbar />
      <ColorfulBar />
      <PopularProduct />
    </div>
  );
}

export default Home;
