import React, { useEffect, useState } from "react";
import { BsBox } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Product({ product, popularItem, className }) {
  const nav = useNavigate();
  const item = product || popularItem;
  const [cargo, setCargo] = useState(false);
  const [discount, setDiscount] = useState(false);
  useEffect(() => {
    item.coupons.map((coupon) => {
      if (coupon === 2) {
        setDiscount(true);
      } else if (coupon === 4) {
        setCargo(true);
      }
    });
  }, [item]);
  const handleClickProductItem = (id) => {
    nav(`productDetails/${id}`);
  };

  return (
    <div
      className={`productItem ${className}`}
      onClick={() => handleClickProductItem(item.id)}
    >
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
        <div className="favorite">
          <AiOutlineHeart className="productFavoriteIcon" />
        </div>
      </div>
      <img
        src={item.imageUrl}
        alt="ürün görseli"
        className={`productImage ${className}`}
      />
      <div className={`productTitle ${className}`}>{item.name}</div>
      <div className={`productPrice ${className}`}>{item.price} TL</div>
    </div>
  );
}

export default Product;
