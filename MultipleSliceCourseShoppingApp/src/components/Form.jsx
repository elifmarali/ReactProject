import React from "react";

function Form() {
  return (
    <div className="formContainer">
      <div className="formHeader">Course Add</div>
      <div className="form">
        <div className="formElement">
          <div className="formItem">
            <label className="formLabel">Name : </label>
            <input className="formInput" />
          </div>
          <div className="formItem">
            <label className="formLabel">Description : </label>
            <textarea className="formInput" />
          </div>
          <div className="formItem">
            <label className="formLabel">Price : </label>
            <input type="number" className="formInput" />
          </div>
        </div>
        <button className="addButton">Add</button>
      </div>
    </div>
  );
}

export default Form;
