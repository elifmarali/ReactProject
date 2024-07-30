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
import { CiHeart } from "react-icons/ci";
import { RiCoupon3Line } from "react-icons/ri";

function Detail() {
  let element;
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (store) => store.product
  );

  console.log(productDetail);
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
    <div className="detailContainer">
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
          </div>
          <img
            src={productDetail?.imageUrl}
            alt="ürün görseli"
            className="detailImage"
          />
        </div>
        <div className="productInfo">
          <div className="infoTop">
            <div className="name">
              <div className="categoryInfo">{productDetail?.category}</div>
              {productDetail?.name}
            </div>
            <div className="name">{productDetail?.description}</div>
            <div className="price">{productDetail?.price} TL</div>
            <span className="line" />
          </div>
          {productDetail?.sizes && (
            <div className="sizesContainer">
              <div className="name">Beden:</div>
              {productDetail?.sizes.includes("One Size") ? (
                <button className="oneSize size">Tek Ebat</button>
              ) : (
                <div className="sizeContainer">
                  {productDetail?.sizes.map((size) => {
                    return (
                      <button key={size} className="size">
                        {size}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          {productDetail?.color && (
            <div className="colorsContainer">
              <div className="name">Renk:</div>
              <div
                className="color"
                style={{ backgroundColor: productDetail?.color.toLowerCase() }}
              >
                {productDetail.color}
              </div>
            </div>
          )}
          {discount && (
            <div className="detailCoupon">
              <RiCoupon3Line fill="#ff4a88" className="detailCouponIcon" />
              20 Tl Kupon Fırsatı
            </div>
          )}
          <div className="infoBottom">
            <button className="basketAddButton">Sepete Ekle</button>

            <button
              className={heart ? "detailFavoriteCliked" : "detailFavorite"}
              onClick={() => handleClickFavorite(productDetail?.id)}
            >
              <CiHeart
                className={
                  heart ? "favoriteiIconDetailClicked" : "favoriteIconDetail"
                }
              />
            </button>
          </div>
        </div>
      </div>
      <div className="detailDesc"></div>
    </div>
  );
}

export default Detail;
