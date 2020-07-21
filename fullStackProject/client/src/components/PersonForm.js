import React, { useState } from "react";
import axios from "axios";

function Form() {
  //keep track of what is being typed via useState hook
  // consider spread here if possible
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default stops rerendering of page
    e.preventDefault();
    //make a post request to create a new person
    axios
      .post("http://localhost:8000/api/people", {
        firstName,
        lastName,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  //onChange to update firstName and lastName
  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>First Name</label>
        <br />
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          value={firstName}
        />
      </p>
      <p>
        <label>Last Name</label>
        <br />
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          value={lastName}
        />
      </p>
      <p>
        <label>Price</label>
        <br />
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          value={price}
        />
      </p>
      <p>
        <label>Description</label>
        <br />
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          value={description}
        />
      </p>
      <input type="submit" />
    </form>
  );
}

export default Form;
