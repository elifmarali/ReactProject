import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getEnCokEklenenlerList } from "../redux/Product/productSlice";
import "../styles/PopularProduct.css";
function PopularProduct() {
  const { popularList, productStatus } = useSelector((store) => store.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (productStatus === "success") {
      dispatch(getEnCokEklenenlerList());
    }
  }, [dispatch, productStatus]);
  return (
    <div className="popularContainer">
      {popularList.map((popularItem) => {
        return <Product popularItem={popularItem} key={popularItem.id} />;
      })}
    </div>
  );
}

export default PopularProduct;
