import React from "react";

const DeleteButton = (props) => {
  axios
    .delete("http://localhost:8000/api/people/" + props.id)
    .then((res) => {
      const filteredPeople = props.people.filter((person) => {
        // return true when it's not the delId that needs to be deleted, true means .filter will keep it
        return person._id !== delId;
      });

      // must pass in a NEW array for it to update, .filter returns a new array
      setPeople(filteredPeople);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default DeleteButton;
