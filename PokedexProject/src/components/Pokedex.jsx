import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import PokeGame from "./PokeGame";

function Pokedex() {
  const pokemonList = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];
  const arr1 = [];
  const arr2 = [];

  const makeRandomPokeGroup = () => {
    while (arr1.length < pokemonList.length / 2) {
      const randomIndex = Math.floor(Math.random() * pokemonList.length);
      let randomItem = pokemonList[randomIndex];
      if (!arr1.some((arr1Item) => arr1Item.id === randomItem.id)) {
        arr1.push(randomItem);
      }

      pokemonList.forEach((pokemon) => {
        if (
          !arr1.some((arr1Item) => arr1Item.id === pokemon.id) &&
          arr2.length < pokemonList.length / 2
        ) {
          arr2.push(pokemon);
        }
      });
    }
  };

  makeRandomPokeGroup();

  return <PokeGame arr1={arr1} arr2={arr2}></PokeGame>;
}

export default Pokedex;
