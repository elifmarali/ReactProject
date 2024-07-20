import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import "../styles/Navbar.css";
import { useSelector } from "react-redux";
function Navbar() {
  const { categoryList } = useSelector((store) => store.cart);
  console.log(categoryList);
  return (
    <div className="categories">
      {categoryList?.map((category) => {
        return (
          <div class="category">
            <div key={category} id={category} className="categoryText">
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
