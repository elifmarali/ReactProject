import React from "react";

function Product({ product }) {
  console.log(product);
  return (
    <div className="productItem">
      <img src={product.imageUrl} alt="ürün görseli" className="productImage" />
      <div className="productTitle">{product.name}</div>
      <div className="productPrice">{product.price} TL</div>
    </div>
  );
}

export default Product;
