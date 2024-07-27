import React, { useEffect, useState } from "react";
import { BsBox } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { favoriteClick } from "../redux/Product/productSlice";
import { useDispatch } from "react-redux";
import { RiCoupon3Line } from "react-icons/ri";

function Product({ product, popularItem, flashItem, className }) {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const itemVertical = popularItem || flashItem;
  const itemHorizantal = product;
  const item = itemHorizantal || itemVertical;
  const [cargo, setCargo] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [heart, setHeart] = useState(item.favorite);
  useEffect(() => {
    item.coupons.map((coupon) => {
      if (coupon === 2) {
        setDiscount(true);
      } else if (coupon === 4) {
        setCargo(true);
      }
    });
  }, [item]);

  const handleClickFavorite = (id) => {
    setHeart(!heart);
    dispatch(favoriteClick(item.id));
  };

  return (
    <div className={`productItem ${className}`}>
      <div className="productTop">
        {cargo ? (
          <div className="cargo">
            <BsBox />
            <div className="cargoText">
              Kargo <br /> Bedava
            </div>
          </div>
        ) : (
          ""
        )}
        <div
          className={`favorite ${heart ? "favoriteOn" : ""}`}
          onClick={() => {
            handleClickFavorite(item.id);
          }}
        >
          <AiOutlineHeart
            className={`productFavoriteIcon ${heart ? "favoriteOn" : ""}`}
          />
        </div>
      </div>
      <img
        src={item.imageUrl}
        alt="ürün görseli"
        className={`productImage ${className}`}
        onClick={() => nav(`productDetails/${item.id}`)}
      />
      <div
        className={`productTitle ${className}`}
        onClick={() => nav(`productDetails/${item.id}`)}
      >
        {item.name}
      </div>
      <div
        className={`productPrice ${className}`}
        onClick={() => nav(`productDetails/${item.id}`)}
      >
        {item.price} TL
      </div>
      {discount && (
        <div className="coupon">
          <RiCoupon3Line fill="#ff4a88" className="couponIcon" />
          Kupon Fırsatı
        </div>
      )}
    </div>
  );
}

export default Product;
