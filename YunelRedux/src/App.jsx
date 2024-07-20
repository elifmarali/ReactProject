import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
