import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";

function PokeGame({ arr1, arr2 }) {
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);

  const totalCalculate = () => {
    let arr1Total = arr1.reduce((acc, item) => acc + item.base_experience, 0);
    setTotal1(arr1Total);
    let arr2Total = arr2.reduce((acc, item) => acc + item.base_experience, 0);
    setTotal2(arr2Total);
  };
  useEffect(() => {
    totalCalculate();
  }, []);

  return (
    <>
      <PokeCard
        arr={total1 > total2 ? arr1 : arr2}
        winner={true}
        totalPoint={total1 > total2 ? total1 : total2}
      />
      <PokeCard
        arr={total1 < total2 ? arr1 : arr2}
        winner={false}
        totalPoint={total1 < total2 ? total1 : total2}
      />
    </>
  );
}

export default PokeGame;
