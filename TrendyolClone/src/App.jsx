import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import NotFoundPage from "./page/NotFoundPage";
import ProductDetails from "./page/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:tags" || "/:category",
    element: <ProductList />,
  },
  {
    path: "productDetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
