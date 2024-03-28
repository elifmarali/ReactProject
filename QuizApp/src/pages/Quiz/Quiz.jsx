import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { fetchData } from "../../api/api";
import { useParams } from "react-router-dom";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Modal from "../../components/Modal/Modal";
function Quiz() {
  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(difficulty, amount);
      setQuestionsData(data);
    };
    getData();
  }, []);
  console.log(questionsData);

  return (
    <div className="quiz">
      {modal ? (
        <Modal score={score} />
      ) : (
        <QuestionCard
          amount={amount}
          questionsData={questionsData}
          count={count}
          setCount={setCount}
          score={score}
          setScore={setScore}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
}

export default Quiz;
