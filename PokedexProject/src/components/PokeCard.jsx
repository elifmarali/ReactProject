import React from "react";
import Pokedex from "./Pokedex";

function PokeCard({ arr, winner, totalPoint }) {
  let pokeItem = arr.map((pokemon) => {
    let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    return (
      <div className="pokeItem" key={pokemon.id}>
        <div>{pokemon.name}</div>
        <img src={imgSrc} alt="" />
        <div>
          <div>Type : {pokemon.type.toUpperCase()}</div>
          <div>Base Experience : {pokemon.base_experience}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="pokeContainer">
      {
        <div className="pokeGroup">
          {winner ? <div>Winner</div> : <div>Loser</div>}
          <div>Total Point : {totalPoint}</div>
          <div className="pokes">{pokeItem}</div>
        </div>
      }
    </div>
  );
}

export default PokeCard;
