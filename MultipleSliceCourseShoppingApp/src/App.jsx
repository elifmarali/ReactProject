import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Search from "./components/Search";
import Total from "./components/Total";

function App() {
  return (
    <div className="container">
      <div className="main">
        <Form />
        <Search />
        <List />
        <Total />
      </div>
    </div>
  );
}

export default App;
