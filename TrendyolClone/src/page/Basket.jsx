import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Basket() {
  const { total } = useSelector((store) => store.basket);
  useEffect(() => {
    console.log(total);
  }, [total]);
  return <div>Basket</div>;
}

export default Basket;
