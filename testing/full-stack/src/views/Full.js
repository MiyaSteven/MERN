import React, { useEffect, useState } from "react";

import axios from "axios";
import Loading from "../components/Loading";
import AllFull from "./AllFull";

const Full = (props) => {
  const [full, setFull] = useState(null);

  useEffect(() => {
    axios
      .get(`"http://swapi.dev/api/people/"${props.id}`)
      .then((res) => {
        setFull(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  if (full === null) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Name: {full.name}</h1>
      <p>Pokedex Number: {full.id}</p>
      <p>Base EXP: {full.base_experience}</p>
      <p>Order: {full.order}</p>

      <h3>Abilities:</h3>
      <ul>
        {full.abilities.map((ability, name) => {
          return <li key={ability}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Full;
