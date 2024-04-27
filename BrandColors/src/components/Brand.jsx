import React, { useContext, useState } from "react";
import { getContrastYIQ } from "../helpers";
import MainContext from "../context/MainContext";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Brand({ brand }) {
  const { selectedBrands, setSelectedBrands, copied, setCopied, setOpen } =
    useContext(MainContext);
  const toggleBrand = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  return (
    <div
      className={`brand ${selectedBrands.includes(brand.slug) ? "active" : ""}`}
    >
      <h5 onClick={toggleBrand}>{brand.title}</h5>
      <div className="brand-colors">
        {brand.colors.map((color, id) => (
          <CopyToClipboard
            text={color}
            onCopy={() => {
              setCopied({ colorText: color, isCopy: true });
              setOpen(true);
            }}
            key={id}
            style={{
              "--bgColor": `#${color}`,
              "--textColor": `${getContrastYIQ(color)}`,
            }}
          >
            <span>{color}</span>
          </CopyToClipboard>
        ))}
      </div>
    </div>
  );
}

export default Brand;
