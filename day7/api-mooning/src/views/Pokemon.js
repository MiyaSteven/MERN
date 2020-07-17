import React, { useEffect, useState } from "react";

import axios from "axios";
import Loading from "../components/Loading";
import AllPokemon from "./AllPokemon";

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`https://https://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then((res) => {
        setPokemon(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  if (pokemon === null) {
    return <Loading />;
  }

  // function printSinglePokemon(allPokemon)
  // AllPokemon.allPokemon.map((pokemon, idx) => {
  //   return pokemon.name;
  // });

  return (
    <div>
      <h1>Name: {pokemon.name}</h1>
      <p>Pokedex Number: {pokemon.id}</p>
      <p>Base EXP: {pokemon.base_experience}</p>
      <p>Order: {pokemon.order}</p>

      <h3>Abilities:</h3>
      <ul>
        {pokemon.abilities.map((ability, name) => {
          return <li key={ability}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pokemon;
