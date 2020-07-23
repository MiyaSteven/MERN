import React, { useEffect, useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";
import Loading from "./Loading";

const Person = (props) => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people/" + props._id) // concatinate props.id when need to grab person
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (person === null) {
    return <Loading />;
  }

  return (
    <div key={person._id}>
      <h2>{person.name}</h2>
      <p>Population: {person.population}</p>
      <img
        style={{
          paddingBottom: 20,
          borderBottom: "2px solid gray",
          width: "80%",
        }}
        src={person.imgUrl}
        alt={`${person.name} Person`}
      />
      <div>
        <button
          onClick={(event) => {
            navigate(`/people/${person._id}/edit`);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Person;
