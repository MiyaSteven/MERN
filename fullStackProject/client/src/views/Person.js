import React, { useEffect, useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";
import Loading from "./Loading";

const Person = (props) => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people/" + props.id)
      .then((res) => {
        setPerson(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  if (person === null) {
    return <Loading />;
  }

  return (
    <div key={person._id}>
      <h2>{person.name}</h2>
      <p>Position: {person.position}</p>
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
