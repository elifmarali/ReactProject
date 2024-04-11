import "./App.css";
import PokeCard from "./components/PokeCard";
import PokeGame from "./components/PokeGame";
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <div className="App">
      <h1>Pokemon Go Card Game</h1>
      <Pokedex />
    </div>
  );
}

export default App;
