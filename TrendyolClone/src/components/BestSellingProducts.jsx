import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getBestSellingList } from "../redux/Product/productSlice";
import "../styles/PopularProduct.css";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function BestSellingProducts() {
  const { bestSellingList, productStatus } = useSelector(
    (store) => store.product
  );
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    if (productStatus === "success") {
      dispatch(getBestSellingList());
    }
  }, [dispatch, productStatus]);

  const scrollLeft = () => {
    document.getElementById("bestSellingList").scrollLeft -= 1000;
  };

  const scrollRight = () => {
    document.getElementById("bestSellingList").scrollLeft += 1000;
  };

  return (
    <div className="popularContainer">
      <div className="popularTop">
        <h3 className="popularHeader">En Cok Satan Ürünler</h3>
        <button
          className="popularAllButton"
          onClick={() => nav("/enCokOneCıkanlar")}
        >
          Tümünü Gör <FaAngleRight className="allIcon" />
        </button>
      </div>
      <div className="scrollButtons">
        <div className="scrollButton scrollLeft">
          <FaAngleLeft className="scrollIcon " onClick={scrollLeft} />
        </div>
        <div className="popularList" id="bestSellingList">
          {bestSellingList?.map((popularItem) => (
            <Product
              popularItem={popularItem}
              key={popularItem?.id}
              className="popularItem bestSelling"
            />
          ))}
        </div>
        <div className="scrollButton scrollRight">
          <FaAngleRight className="scrollIcon " onClick={scrollRight} />
        </div>
      </div>
    </div>
  );
}

export default BestSellingProducts;
