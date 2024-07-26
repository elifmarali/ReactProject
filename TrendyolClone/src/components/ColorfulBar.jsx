import React from "react";
import "../styles/ColorfulBar.css";
import { useNavigate } from "react-router-dom";
function ColorfulBar() {
  const nav = useNavigate();
  return (
    <div className="colorfulBar">
      <div
        className="colorfulItem green"
        onClick={() => nav("/enCokEklenenler")}
      >
        Sepete En Çok Eklenenler
      </div>
      <div
        className="colorfulItem orange"
        onClick={() => nav("/enCokOneCıkanlar")}
      >
        En Çok Öne Çıkanlar
      </div>
      <div className="colorfulItem pink" onClick={() => nav("/flashUrunler")}>
        Flaş Ürünler
      </div>
    </div>
  );
}

export default ColorfulBar;
