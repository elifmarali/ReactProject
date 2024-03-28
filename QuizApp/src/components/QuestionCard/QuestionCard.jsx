import React, { useEffect, useState } from "react";
import "./QuestionCard.css";
function QuestionCard({
  amount,
  questionsData,
  count,
  setCount,
  score,
  setScore,
  modal,
  setModal,
}) {
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0 && count < amount) {
        setCount(count + 1);
        setTimer(30);
      } else if (count >= amount) {
        setModal(true);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const approvedChoice = (e) => {
    if (amount - 1 > count) {
      const checkAnswer =
        e.currentTarget.value === questionsData[count]?.correct_answer;
      if (checkAnswer) {
        setScore(score + 100);
      }
      setCount(count + 1);
      setTimer(30);
    } else {
      setModal(true);
    }
  };
  return (
    <div className="questionCard">
      <div className="timer">{timer}</div>
      <div className="questionCardContainer">
        {count + 1}/{amount}
        <div className="questionText">{questionsData[count]?.question}</div>
        <div className="answersContainer">
          {questionsData[count]?.answers.map((ans, index) => {
            return (
              <button value={ans} key={index} onClick={approvedChoice}>
                {ans}
              </button>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
