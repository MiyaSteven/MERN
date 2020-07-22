import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const People = (props) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:8000/api/people")
        .then((res) => {
          setPeople(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    const handleDelete = (delId) => {
      axios
        .delete("http://localhost:8000/api/people/" + delId)
        .then((res) => {
          const filteredPeople = people.filter((person) => {
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
    if (people === null) {
      return (
        <img
          src="https://www.demilked.com/magazine/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-14.gif"
          alt="Loading"
        />
      );
    }
    return (
      <div>
        <h2>All People</h2>
        {people.map((person) => {
          return (
            <div key={person._id}>
              <h2>
                <Link to={`/people/${person._id}`}>{person.name}</Link>
              </h2>
              <p>Position: {person.position}</p>
              <img
                style={{
                  paddingBottom: 20,
                  width: "20%",
                }}
                src={person.imgUrl}
                alt={`${person.name} Person`}
              />

              <div>
                <button
                  onClick={(event) => {
                    handleDelete(person._id);
                  }}
                >
                  Delete
                </button>{" "}
                |{" "}
                <button
                  onClick={(event) => {
                    navigate(`/people/${person._id}/edit`);
                  }}
                >
                  Edit
                </button>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  });
};

export default People;
