import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteList } from "../redux/Product/productSlice";
import SearchBar from "../components/SearchBar";
import "../styles/Favorite.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Product from "../components/Product";
function Favorite() {
  const { productList, productStatus, favoriteList, search, searchList } =
    useSelector((store) => store.product);
  const dispatch = useDispatch();
  const nav = useNavigate();
  useEffect(() => {
    if (productStatus === "success") {
      dispatch(getFavoriteList());
    }
  }, [productList]);
  return (
    <div className="favoriteContainer">
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
        <div className="favoriteList">
          {favoriteList?.map((favorite) => (
            <div
              className="favoriteItem"
              key={favorite?.id}
              onClick={() => {
                nav(`/productDetails/${favorite?.id}`);
              }}
            >
              <img
                src={favorite?.imageUrl}
                alt="urun gorseli"
                className="favoriteImage"
              />
              <div className="favoriteRight">
                <h4>{favorite?.name}</h4>
                <h6 className="favoriteDesc">{favorite?.description}</h6>
                <h5 className="favoritePrice">{favorite?.price} TL</h5>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorite;
