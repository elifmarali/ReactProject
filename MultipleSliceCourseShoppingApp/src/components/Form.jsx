import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeDesc, changeName } from "../redux/Slice/formSlice";
import { addItem } from "../redux/Slice/courseSlice";

function Form() {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state) => state.form);
  return (
    <div className="formContainer">
      <div className="formHeader">Course Add</div>
      <div className="form">
        <div className="formElement">
          <div className="formItem">
            <label className="formLabel">Name : </label>
            <input
              className="formInput"
              onChange={(e) => dispatch(changeName(e.target.value))}
              value={name}
            />
          </div>
          <div className="formItem">
            <label className="formLabel">Description : </label>
            <textarea
              className="formInput"
              onChange={(e) => dispatch(changeDesc(e.target.value))}
              value={description}
            />
          </div>
          <div className="formItem">
            <label className="formLabel">Price : </label>
            <input
              type="number"
              className="formInput"
              onChange={(e) => dispatch(changeCost(e.target.value))}
              value={cost}
            />
          </div>
        </div>
        <button
          className="addButton"
          onClick={() => dispatch(addItem({ name, description, cost }))}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Form;
