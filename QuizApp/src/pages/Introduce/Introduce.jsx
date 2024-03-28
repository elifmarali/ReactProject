import React, { useState } from "react";
import "./Introduce.css";
import logo from "../../assets/logo-no-background.png";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
function Introduce() {
  const difficulty = ["easy", "medium", "hard"];
  const amount = ["5", "10", "15", "20"];
  const [selectedDifficult, setSelectedDifficult] = useState();
  const [selectedAmount, setSelectedAmount] = useState();
  const navigate = useNavigate();

  const startButtonClick = () => {
    if (
      selectedDifficult !== null ||
      selectedDifficult !== undefined ||
      selectedAmount !== undefined ||
      selectedAmount !== null
    ) {
      navigate(`/quiz/${selectedDifficult}/${selectedAmount}`);
    }
  };
  return (
    <div className="introduce">
      <div className="introduceContainer">
        <img src={logo} alt="" width={80} height={80} />
        <Dropdown
          dataDifficulty={difficulty}
          dataAmount={amount}
          setSelectedDifficult={setSelectedDifficult}
          setSelectedAmount={setSelectedAmount}
        />{" "}
        <button className="startButton" onClick={startButtonClick}>
          Quiz Start
        </button>
      </div>
    </div>
  );
}

export default Introduce;
