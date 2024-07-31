import React, { useEffect, useState } from "react";
import "../styles/Detail.css";

const CustomPopup = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // 3 saniye sonra kapanır

    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className="customPopup">{message}</div>;
};

export default CustomPopup;
