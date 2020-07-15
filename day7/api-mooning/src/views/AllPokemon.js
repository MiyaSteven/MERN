import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

import Loading from "../components/Loading";

const AllPokemon = (props) => {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  function fetchAllPokemon() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        setAllPokemon(res.data.results);
        allPokemon.concat(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setTimeout(
    fetchAllPokemon(() => {
      setAllPokemon().bind();
    }, 3000)
  );

  if (allPokemon === []) {
    return <Loading />;
  }

  return (
    <div>
      <h2>All Pokemon</h2>
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
