import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

function People(props) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (props.people === []) {
      return <Loading />;
    }
  }, []);

  return (
    <div>
      <hr />
      All People:
      {people.map((person, i) => {
        return (
          <button key={i}>
            {person.firstName}, {person.lastName},
          </button>
        );
      })}
    </div>
  );
}

export default People;
