import React, { useEffect, useState } from "react";

function ProductItem({ product, basket, setBasket, total, setTotal }) {
  return (
    <div className="productItem">
      <img src={product.img} alt="" className="productImage" />
      <h4 className="productName">{product.name}</h4>
      <h6 className="productPrice">${product.price}</h6>
      <div className="buttonContainer">
        <button>Sat</button>
        <div>{0}</div>
        <button>Satin Al</button>
      </div>
    </div>
  );
}

export default ProductItem;
