import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import ProductList from "./components/ProductList";
import NotFoundPage from "./page/NotFoundPage";
import ProductDetails from "./page/ProductDetails";
import { useEffect } from "react";
import { getProductList } from "./redux/Product/productSlice";
import Basket from "./page/Basket";
import Favorite from "./page/Favorite";
import { quantityAndTotalCalculate } from "./redux/Basket/basketSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:category",
    element: <ProductList />,
  },
  {
    path: "/:category/:id",
    element: <ProductDetails />,
  },
  {
    path: "/productDetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
    dispatch(quantityAndTotalCalculate());
  }, []);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
