import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getEnCokEklenenlerList } from "../redux/Product/productSlice";
import "../styles/PopularProduct.css";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function PopularProduct() {
  const { popularList, productStatus } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    if (productStatus === "success") {
      dispatch(getEnCokEklenenlerList());
    }
  }, [dispatch, productStatus]);

  const scrollLeft = () => {
    document.getElementById("popularList").scrollLeft -= 1000;
  };

  const scrollRight = () => {
    document.getElementById("popularList").scrollLeft += 1000;
  };

  return (
    <div className="popularContainer">
      <div className="popularTop">
        <h3 className="popularHeader">Popüler Ürünler</h3>
        <button
          className="popularAllButton"
          onClick={() => nav("/enCokEklenenler")}
        >
          Tümünü Gör <FaAngleRight className="allIcon" />
        </button>
      </div>
      <div className="scrollButtons">
        <div className="scrollButton scrollLeft" onClick={scrollLeft}>
          <FaAngleLeft className="scrollIcon" />
        </div>
        <div className="popularList" id="popularList">
          {popularList?.map((popularItem) => (
            <Product
              popularItem={popularItem}
              key={popularItem?.id}
              className="popularItem"
            />
          ))}
        </div>
        <div className="scrollButton scrollRight" onClick={scrollRight}>
          <FaAngleRight className="scrollIcon" />
        </div>
      </div>
    </div>
  );
}

export default PopularProduct;
