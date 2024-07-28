import React, { useEffect } from "react";
import "../styles/FlashProducts.css";
import { useDispatch, useSelector } from "react-redux";
import { getFlashList } from "../redux/Product/productSlice";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

function FlashProducts() {
  const { flashList, productStatus } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    if (productStatus === "success") {
      dispatch(getFlashList());
    }
  }, [dispatch, productStatus]);

  const scrollLeft = () => {
    document.getElementById("flashList").scrollLeft -= 1000;
  };

  const scrollRight = () => {
    document.getElementById("flashList").scrollLeft += 1000;
  };

  return (
    <div className="flashContainer">
      <div className="topFlash">
        <div className="topLeftFlash">
          <FaBoltLightning fill="yellow" className="flashIcon" />
          <div className="flashHeader">Flaş Ürünler</div>
        </div>
        <button className="flashAllButton" onClick={() => nav("/flash")}>
          Tüm Ürünler <FaAngleRight className="allIcon" />
        </button>
      </div>
      <div className="scrollButtons">
        <div className="scrollButton scrollLeft" onClick={scrollLeft}>
          <FaAngleLeft className="scrollIcon" />
        </div>
        <div className="popularList" id="flashList">
          {flashList?.map((flashItem) => (
            <Product
              flashItem={flashItem}
              key={flashItem?.id}
              className="popularItem flashItem"
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

export default FlashProducts;
