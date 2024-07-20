import React from "react";
import CardList from "../components/CardList";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <SearchBar />
      <Navbar />
      <CardList />
    </div>
  );
}

export default Home;
