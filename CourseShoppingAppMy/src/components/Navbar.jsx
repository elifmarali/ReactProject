import React from "react";
import logo from "../assets/logo1.png";
import { BsBasket2Fill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Navbar() {
  const { quantity } = useSelector((state) => state.course);
  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="navbarRightSection">
        <span className="navbarQuantity">{quantity}</span>
        <BsBasket2Fill size={30} className="navbarIcon" />
      </div>
    </div>
  );
}

export default Navbar;
