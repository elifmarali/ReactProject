import React from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
function Modal({ score }) {
  const navigate = useNavigate();
  return (
    <div className="modal">
      Scor : {score}
      <button onClick={() => navigate("/")} className="modalButton">
        Start Again
      </button>
    </div>
  );
}

export default Modal;
