import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import "../styles/Basket.css";
import BasketItem from "../components/BasketItem";
import Footer from "../components/Footer";
import Product from "../components/Product";
function Basket() {
  const { total, basket, discount, discountValue, discountAmount } =
    useSelector((store) => store.basket);
  const { search, searchList } = useSelector((store) => store.product);
  return (
    <>
      <div className="basketPage">
        <SearchBar />
        <Navbar />
        {search ? (
          <div className="productList">
            {searchList.map((product, index) => (
              <Product
                product={product}
                key={`product-${product.id}-${index}`}
                className="popularItem"
              />
            ))}
          </div>
        ) : (
          <>
            <div className="basketContainer">
              {basket.map((basketItem) => {
                return (
                  <BasketItem
                    basketInfo={basketItem}
                    key={`${basketItem?.id}-${basketItem?.color}-${basketItem?.size}`}
                  />
                );
              })}
            </div>
            <span className="line" />
            <div className="total">
              <div className="totalItem">
                <h5>İndirimsiz Tutar :</h5>
                <h5>{discountAmount.toFixed(2)} TL</h5>
              </div>
              <div className="totalItem">
                <h5>İndirim Sayısı :</h5>
                <h5>{discount} Adet</h5>
              </div>
              <div className="totalItem">
                <h5>İndirim Tutarı :</h5>
                <h5>{discountValue} TL</h5>
              </div>
              <div className="totalItem">
                <h3>Total:</h3>
                <h3 className="totalText">{total.toFixed(2)} TL</h3>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Basket;
