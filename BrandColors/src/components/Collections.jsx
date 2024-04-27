import React, { useContext, useEffect } from "react";
import MainContext from "../context/MainContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import Brand from "./Brand";
import Copied from "./Copied";
import Download from "./Download";
import { FaArrowLeft } from "react-icons/fa6";

function Collections() {
  const nav = useNavigate();
  const { slugs } = useParams();
  const { selectedBrands, brandList, setSelectedBrands, copied } =
    useContext(MainContext);

  console.log(selectedBrands);

  const allBrands = () => {
    setSelectedBrands([]);
    nav("/");
  };
  useEffect(() => {
    setSelectedBrands(slugs.split(","));
  }, [slugs]);

  return (
    <main className="content">
      <header className="header">
        <a onClick={allBrands} className="rightArrow">
          <FaArrowLeft />
          All Brands
        </a>

        {selectedBrands.length > 0 && <Download />}
      </header>
      <section className="brands">
        {selectedBrands.map((slug, id) => {
          let brand = brandList.find((brand) => brand.slug === slug);
          return (
            <LazyLoad placeholder="Loading..." once={true} key={id}>
              <Brand key={id} brand={brand} />
            </LazyLoad>
          );
        })}
      </section>
      {copied && <Copied />}
    </main>
  );
}

export default Collections;
