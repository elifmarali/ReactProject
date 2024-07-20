import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import products from "../src/products.json";
import Products from "./components/Products";
function App() {
  const [money, setMoney] = useState(100);
  const [allProducts, setAllProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setAllProducts(products);
  }, []);

  return (
    <>
      <Header money={money} />
      <Products
        allProducts={allProducts}
        basket={basket}
        setBasket={setBasket}
        total={total}
        setTotal={setTotal}
      />
    </>
  );
}

export default App;
