import React from "react";
import Form from "../components/Form";
import DeleteButton from "../components/DeleteButton";

const EditView = (props) => {
  const { id } = props;
  return (
    <div>
      <h1>We are editing athlete: {id}</h1>
      <Form />
      <DeleteButton />
    </div>
  );
};

export default EditView;
