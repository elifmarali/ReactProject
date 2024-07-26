import React, { useEffect } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import "../styles/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList } from "../redux/Product/productSlice";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { categoryList, productStatus } = useSelector((store) => store.product);
  useEffect(() => {
    if (productStatus === "success") {
      dispatch(getCategoryList());
    }
  }, [dispatch, productStatus]);
  return (
    <div className="categories">
      {categoryList?.map((category) => {
        return (
          <div className="category" key={category}>
            <div
              key={category}
              id={category}
              className="categoryText"
              onClick={() => {
                nav(`/${category}`);
              }}
            >
              {category}
            </div>
            <span className=" line" />
          </div>
        );
      })}
    </div>
  );
}

export default Navbar;
