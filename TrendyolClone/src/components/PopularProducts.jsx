import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getEnCokEklenenlerList } from "../redux/Product/productSlice";
import "../styles/PopularProduct.css";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function PopularProduct() {
  const nav = useNavigate();
  const { popularList, productStatus } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (productStatus === "success") {
      dispatch(getEnCokEklenenlerList());
    }
  }, [dispatch, productStatus]);
  return (
    <div className="popularContainer">
      <div className="popularTop">
        <h3 className="popularHeader">Popüler Ürünler</h3>
        <button
          className="popularAllButton"
          onClick={() => nav("/enCokEklenenler")}
        >
          Tümünü Gör <MdChevronRight className="allIcon" />
        </button>
      </div>
      <div className="popularList">
        {popularList.map((popularItem) => (
          <Product
            popularItem={popularItem}
            key={`popular-${popularItem.id}`}
            className="popularItem"
          />
        ))}
      </div>
    </div>
  );
}

export default PopularProduct;
