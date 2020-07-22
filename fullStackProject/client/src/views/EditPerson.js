import React, { useEffect, useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const EditPerson = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people/" + props.id)
      .then((res) => {
        // destructure if you want to avoid constantly typing res.data
        // const {name, population, imgUrl } = res.data;

        setName(res.data.name);
        setPosition(res.data.position);
        setImgUrl(res.data.imgUrl);
      })
      .catch((err) => {
        // this catch happens because of the res.status(400) in the controller
        setErrors(err.response.data.errors);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const editedPerson = {
      // long-form
      name: name,
      // shorthand, when key name matches the name of the var that stores the value
      position,
      imgUrl,
    };

    axios
      .put("http://localhost:8000/api/people/" + props.id, editedPerson)
      .then((res) => {
        console.log(res);
        navigate("/people/" + props.id);
      })
      .catch((err) => {
        // this catch happens because of the res.status(400) in the controller
        setErrors(err.response.data.errors);
        console.log(err.response);
      });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div>
          <label>Name: </label>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            value={name}
          />
          {errors && (
            <span style={{ color: "red" }}>
              {/* ?. is called optional chaining, NEW feature in JS */}
              {errors?.name?.properties?.message}
            </span>
          )}
        </div>

        <div>
          <label>Position: </label>
          <input
            onChange={(event) => {
              setPosition(event.target.value);
            }}
            type="text"
            value={position}
          />
          {errors && (
            <span style={{ color: "red" }}>
              {errors?.position?.properties?.message}
            </span>
          )}
        </div>

        <div>
          <label>Image Url: </label>
          <input
            onChange={(event) => {
              setImgUrl(event.target.value);
            }}
            type="text"
            value={imgUrl}
          />
          {errors && (
            <span style={{ color: "red" }}>
              {errors?.imgUrl?.properties?.message}
            </span>
          )}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditPerson;
