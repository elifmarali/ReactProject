import React, { useContext, useEffect, useState } from "react";
import Search from "./Search";
import Brand from "./Brand";
import MainContext from "../context/MainContext";
import Copied from "./Copied";
import LazyLoad from "react-lazy-load";
import Download from "./Download";

function Content() {
  const { selectedBrands, brandList, copied } = useContext(MainContext);

  return (
    <main className="content">
      <header className="header">
        <Search />
        {selectedBrands.length > 0 && <Download />}
      </header>
      <section className="brands">
        {brandList.map((brand, id) => {
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

export default Content;
