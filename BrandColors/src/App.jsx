import { useContext, useEffect, useState } from "react";
import "./App.scss";
import Collections from "./components/Collections";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContext from "./context/MainContext";

function App() {
  return (
    <BrowserRouter>
      <Sidebar></Sidebar>

      <Routes>
        <Route path="/" exact element={<Content />}>
          {" "}
        </Route>
        <Route path="/collections/:slugs" element={<Collections />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
