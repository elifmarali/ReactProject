import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/Slice/courseSlice";

function List() {
  const list = useSelector(({ form, course: { data, searchFields } }) => {
    const filteredList = data.filter((item) =>
      item.name.toLowerCase().includes(searchFields.toLowerCase())
    );
    return {
      course: filteredList,
    };
  });
  const dispatch = useDispatch();

  const listHTML = list.course.map((course) => {
    return (
      <div className="listItem" key={course.id}>
        <div className="listLeft">
          <div className="name">{course.name}</div>
          <div className="desc">{course.description}</div>
          <div className="price">{course.cost} $</div>
        </div>
        <button
          className="deleteItem"
          onClick={() => {
            dispatch(deleteItem(course.id));
          }}
        >
          Sil
        </button>
      </div>
    );
  });
  return <div className="listContainer">{listHTML}</div>;
}

export default List;
