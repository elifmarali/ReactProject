import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import NotFoundPage from "./page/NotFoundPage";
import ProductDetails from "./page/ProductDetails";
import { useEffect } from "react";
import { getProductList } from "./redux/Product/productSlice";
import Basket from "./page/Basket";

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
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
  }, []);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
