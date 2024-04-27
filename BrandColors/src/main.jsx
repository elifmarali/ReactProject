import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainContext, { MainProvider } from "./context/MainContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainProvider>
    <App />
  </MainProvider>
);
