import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  favoriteClick,
  getProductDetails,
} from "../redux/Product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Detail.css";
import { BsBox } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { RiCoupon3Line } from "react-icons/ri";
import CustomPopup from "./CustomPopup"; // CustomPopup bileşenini import et
import { basketAddProduct } from "../redux/Basket/basketSlice";

function Detail() {
  let element;
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (store) => store.product
  );
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [cargo, setCargo] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [heart, setHeart] = useState(false);
  const location = useLocation();
  const [popupText, setPopupText] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    setSelectedSize(null);
  }, [location]);

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

  const handleClickSize = (size) => {
    if (selectedSize === null) {
      setSelectedSize(size);
    } else if (selectedSize === size) {
      setSelectedSize(null);
    } else {
      setSelectedSize(size);
    }
  };

  const handleClickColor = (color) => {
    if (selectedColor === null) {
      setSelectedColor(color);
    } else if (selectedColor === color) {
      setSelectedColor(null);
    } else {
      setSelectedColor(color);
    }
  };

  const handleAddToBasket = (e) => {
    if (selectedSize === null && selectedColor === null) {
      setPopupText("Beden ve Renk Seçimi Yapınız!");
    } else if (selectedSize === null) {
      setPopupText("Beden Seçimi Yapınız!");
    } else if (selectedColor === null) {
      setPopupText("Renk Seçimi Yapınız!");
    } else {
      setPopupText(null);
      dispatch(
        basketAddProduct({
          name: productDetail.name,
          id: productDetail.id,
          size: selectedSize,
          color: selectedColor,
          price: productDetail?.price,
          coupons: productDetail?.coupons,
        })
      );
      setSelectedSize(null);
      setSelectedColor(null);
    }
    setIsPopupVisible(true);
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
                <button
                  className={`oneSize size ${
                    selectedSize === "One Size" && "selectedSize"
                  }`}
                  onClick={() => {
                    handleClickSize("One Size");
                  }}
                >
                  Tek Ebat
                </button>
              ) : (
                <div className="sizeContainer">
                  {productDetail?.sizes.map((size) => {
                    return (
                      <button
                        key={size}
                        className={`size ${
                          selectedSize === size && "selectedSize"
                        }`}
                        onClick={() => {
                          handleClickSize(size);
                        }}
                      >
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
                className={`color ${
                  selectedColor === productDetail?.color && "selectedColor"
                }`}
                style={{ backgroundColor: productDetail?.color.toLowerCase() }}
                onClick={() => handleClickColor(productDetail?.color)}
              >
                {productDetail.color}
              </div>
            </div>
          )}
          {discount && (
            <div className="detailCoupon">
              <RiCoupon3Line fill="#ff4a88" className="detailCouponIcon" />
              20 TL Kupon Fırsatı
            </div>
          )}

          <div className="infoBottom">
            {isPopupVisible && popupText && (
              <CustomPopup
                message={popupText}
                onClose={() => setIsPopupVisible(false)}
              />
            )}
            <button
              className="basketAddButton"
              onClick={(e) => handleAddToBasket(e)}
            >
              Sepete Ekle
            </button>

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
