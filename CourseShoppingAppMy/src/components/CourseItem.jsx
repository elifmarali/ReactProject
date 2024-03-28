import React from "react";
import { VscTriangleUp } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import {
  decrease,
  deleteCourseItem,
  increase,
} from "../redux/Slices/CourseSlice";

function CourseItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="cardLeft">
        <img src={img} alt="" className="cardImage" />
      </div>
      <div className="cardRight">
        <h3 className="cardTitle">{title}</h3>
        <h6 className="cardPrice">{price}$</h6>
        <div className="quantityContainer">
          <button className="quantityButton">
            <VscTriangleUp
              className="quantityIcon"
              onClick={() => dispatch(increase(id))}
            />
          </button>
          <div className="quantity"> {quantity}</div>
          <button className="quantityButton">
            <VscTriangleDown
              className="quantityIcon"
              onClick={() => dispatch(decrease(id))}
            />
          </button>
        </div>
        <button
          className="deleteItem"
          onClick={() => dispatch(deleteCourseItem(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
