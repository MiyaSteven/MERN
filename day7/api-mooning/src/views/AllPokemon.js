import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

import Loading from "../components/Loading";

const AllPokemon = (props) => {
  const [allPokemon, setAllPokemon] = useState([]);

  // useEffect(() => {
  //   fetchAllPokemon();
  // }, []);

  function fetchAllPokemon() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=964&offset=0")
      .then((res) => {
        setAllPokemon(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // if (allPokemon === []) {
  //   return <Loading />;
  // }

  return (
    <div>
      <h2>All Pokemon</h2>
      <button onClick={fetchAllPokemon}>Fetch Poke Data</button>
      {allPokemon.map((pokemon) => {
        return (
          <div key={pokemon.name}>
            <h2>
              Pokemon:{" "}
              <Link to={"/allPokemon/" + pokemon.id}>{pokemon.name}</Link>
            </h2>
            <p>
              <img src={pokemon.url}></img>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AllPokemon;
