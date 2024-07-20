import React from "react";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";

function CardList() {
  const { clothingList } = useSelector((store) => store.cart);
  console.log(clothingList);
  return <div>fdjfsdoı</div>;
}

export default CardList;
