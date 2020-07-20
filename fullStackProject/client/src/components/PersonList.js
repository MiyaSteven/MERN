import React from "react";
import axios from "axios";

export default (props) => {
  return (
    <div>
      {props.people.map((person, i) => {
        return (
          <p key={i}>
            {person.lastName}, {person.firstName}
          </p>
        );
      })}
    </div>
  );
};
