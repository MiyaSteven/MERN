import React, { useEffect, useState } from "react";
import axios from "axios";

// is this where to create Person
function Details(props) {
  const [person, setPerson] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people/" + props.id)
      .then((res) => setPerson(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <p>First Name: {person.firstName}</p>
      <p>Last Name: {person.lastName}</p>
      <p>Price: {person.price}</p>
      <p>Description: {person.description}</p>
    </div>
  );
}

export default Details;
