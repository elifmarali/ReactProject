import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  favoriteClick,
  getProductDetails,
} from "../redux/Product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Detail.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBox } from "react-icons/bs";

function Detail() {
  let element;
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (store) => store.product
  );
  const [cargo, setCargo] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [heart, setHeart] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (productDetailStatus === "success") {
      setCargo(productDetail.coupons.includes(2));
      setDiscount(productDetail.coupons.includes(4));
      setHeart(productDetail.favorite);
      element = "";
    } else if (productDetailStatus === "loading") {
      element = <div>Loading...</div>;
    } else {
      element = <div>Error...</div>;
    }
  }, [productDetailStatus, productDetail]);

  const handleClickFavorite = () => {
    dispatch(favoriteClick(id));
    setHeart(!heart);
  };

  return (
    <>
      <div>{element}</div>
      <div className="detail">
        <div>
          <div className="productTop">
            {cargo && (
              <div className="cargo">
                <BsBox />
                <div className="cargoText">
                  Kargo <br /> Bedava
                </div>
              </div>
            )}
            <div
              className={`favorite ${heart ? "favoriteOn" : ""}`}
              onClick={handleClickFavorite}
            >
              <AiOutlineHeart
                className={`productFavoriteIcon ${heart ? "favoriteOn" : ""}`}
              />
            </div>
          </div>
          <img
            src={productDetail?.imageUrl}
            alt="ürün görseli"
            className="detailImage"
          />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Detail;
