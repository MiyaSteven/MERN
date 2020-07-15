import React, { useEffect, useState } from "react";

import axios from "axios";
import Loading from "../components/Loading";

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState(null);

  // [props.flight_number] means that useEffect should run again if the flight_number in props changes so that we can get the data for the different flight_number
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

  return (
    <div>
      <h2>Id: {pokemon.id}</h2>
      <p>Name: {pokemon.name}</p>
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
