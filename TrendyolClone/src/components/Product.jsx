import React, { useEffect } from "react";

function Product({ product, popularItem }) {
  const item = product || popularItem;

  return (
    <div className="productItem">
      <img src={item.imageUrl} alt="ürün görseli" className="productImage" />
      <div className="productTitle">{item.name}</div>
      <div className="productPrice">{item.price} TL</div>
    </div>
  );
}

export default Product;
