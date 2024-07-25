import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:tags" || "/:category",
    element: <ProductList />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
