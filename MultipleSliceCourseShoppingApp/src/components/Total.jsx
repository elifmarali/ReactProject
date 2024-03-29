import React from "react";
import { useSelector } from "react-redux";

function Total() {
  const total = useSelector(({ form, course: { data, searchFields } }) => {
    const filteredList = data.filter((course) =>
      course.name.toLowerCase().includes(searchFields.toLowerCase())
    );
    let cost = 0;
    for (let i of filteredList) {
      cost += i.cost;
    }
    return cost;
  });
  return <div className="total">Aggregate : {total} $</div>;
}

export default Total;
