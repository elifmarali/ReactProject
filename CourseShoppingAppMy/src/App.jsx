import "./App.css";
import { Routes, Route } from "react-router-dom";
import Opening from "../src/pages/Opening";
import ShopingPage from "./pages/ShopingPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Opening />}></Route>
      <Route path="/shopping" element={<ShopingPage />}></Route>
    </Routes>
  );
}

export default App;
