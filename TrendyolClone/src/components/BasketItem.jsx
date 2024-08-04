import React from "react";
import "../styles/Basket.css";
import { MdDelete } from "react-icons/md";
import { deleteBasket } from "../redux/Basket/basketSlice";
import { useDispatch } from "react-redux";

function BasketItem({ basketInfo }) {
  const dispatch = useDispatch();

  return (
    <div className="basketInfo">
      <div className="basketRight">
        <img
          src={basketInfo?.imageUrl}
          alt="urun gorseli"
          className="basketImage"
        />

        <div className="basketInfoText">
          <div>Ürün Adı : {basketInfo?.name}</div>
          <div>Renk : {basketInfo?.color}</div>
          <div>Beden :{basketInfo?.size}</div>
          <div>Adet : {basketInfo?.quantity}</div>
        </div>
      </div>
      <button
        className="deleteButton"
        onClick={() => dispatch(deleteBasket(basketInfo))}
      >
        <MdDelete />
        Sil
      </button>
    </div>
  );
}

export default BasketItem;
