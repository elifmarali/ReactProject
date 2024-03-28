import { useState } from "react";
import "./App.css";

function App() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [minError, setMinError] = useState(false);
  const [maxError, setMaxError] = useState(false);
  const [randomNumberInfo, setRandomNumberInfo] = useState(true);
  const handleMinClick = () => {
    setRandomNumberInfo(false);
  };
  const handleMaxClick = () => {
    setMaxError(true);
    setRandomNumberInfo(false);
  };
  const handleMinChange = (e) => {
    if (minValue === "") {
      setMinError(true);
      setRandomNumberInfo(false);
    } else {
      setMinValue(parseInt(e.target.value));
      setMinError(false);
    }
  };
  const handleMaxChange = (e) => {
    if (maxValue === "") {
      setMaxError(true);
      setRandomNumberInfo(false);
    } else {
      setMaxValue(parseInt(e.target.value));
      setMaxError(false);
    }
  };
  const getRandomNumber = () => {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  };

  const handleButtonClick = () => {
    getRandomNumber();
    setRandomNumberInfo(true);
  };

  return (
    <div className="App">
      <div className="Header">
        <label>Random Number</label>
        <div>{randomNumberInfo && getRandomNumber()}</div>
      </div>
      <div className="inputBar">
        <label>Min:</label>
        <input
          type="number"
          value={minValue}
          onChange={handleMinChange}
          onClick={handleMinClick}
        />
        {minError && <div>Please enter a min value</div>}
      </div>
      <div className="inputBar">
        <label>Max:</label>
        <input
          type="number"
          value={maxValue}
          onChange={handleMaxChange}
          onClick={handleMaxClick}
        />
        {maxError && <div>Please enter a max value</div>}
      </div>
      <button onClick={handleButtonClick}>Get Random Number</button>
    </div>
  );
}

export default App;
