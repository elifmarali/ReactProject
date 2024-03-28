import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Opening() {
  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      nav("/shopping");
    }, 3000);
  }, []);
  return (
    <div className="openContainer">
      <div className="opening">
        <div className="welcomeText">Welcome</div>
        <div className="openingText">
          You Are Being Redirected To The Page...
        </div>
      </div>
    </div>
  );
}

export default Opening;
