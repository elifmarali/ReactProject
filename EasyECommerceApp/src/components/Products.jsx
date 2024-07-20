import React from "react";
import ProductItem from "./ProductItem";

function Products({ allProducts, basket, setBasket, total, setTotal }) {
  return (
    <div className="products">
      {allProducts.map((product) => {
        return (
          <ProductItem
            product={product}
            key={product.id}
            basket={basket}
            setBasket={setBasket}
            total={total}
            setTotal={setTotal}
          />
        );
      })}
    </div>
  );
}

export default Products;
