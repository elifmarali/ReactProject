import React from "react";

function List() {
  return (
    <div className="listContainer">
      <div className="listItem">
        <div className="listLeft">
          <div className="name">C Programlama</div>
          <div className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
            necessitatibus!
          </div>
          <div className="price">10 $</div>
        </div>
        <button className="deleteItem">Sil</button>
      </div>
    </div>
  );
}

export default List;
