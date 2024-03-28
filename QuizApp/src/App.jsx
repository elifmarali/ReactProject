import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduce from "./pages/Introduce/Introduce";
import Quiz from "./pages/Quiz/Quiz";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduce />}></Route>
        <Route path="/quiz/:difficulty/:amount" element={<Quiz />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
