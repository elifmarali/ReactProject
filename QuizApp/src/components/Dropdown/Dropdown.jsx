import React from "react";
import "./Dropdown.css";

function Dropdown({
  dataDifficulty,
  dataAmount,
  setSelectedDifficult,
  setSelectedAmount,
}) {
  return (
    <div className="dropdown">
      <select
        name=""
        id=""
        onChange={(e) => {
          setSelectedDifficult(e.target.value);
        }}
        className="dropdownContainer"
      >
        {dataDifficulty.map((dt, index) => {
          return (
            <option value={dt} key={index}>
              {dt}
            </option>
          );
        })}
      </select>
      <select
        name=""
        id=""
        onChange={(e) => {
          setSelectedAmount(e.target.value);
        }}
        className="dropdownContainer"
      >
        {dataAmount.map((dt, index) => {
          return (
            <option value={dt} key={index}>
              {dt}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
