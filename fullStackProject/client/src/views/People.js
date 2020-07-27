import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
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
    }, 4000);
  });

  if (people === null) {
    return <Loading />;
  }

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

  return (
    <div>
      <h2>All People</h2>
      <div
        style={{
          display: "inline-block",
          border: "1px solid black",
          width: "100%",
        }}
      >
        {people.map((person, i) => {
          return (
            <table key={i}>
              <td>
                <Link to={"/people/" + person._id}>{person.name}</Link>
              </td>
              <td>Position: {person.position}</td>
              <video
                controls
                style={{
                  paddingBottom: 20,
                  width: "20%",
                }}
                src={person.imgUrl}
                type="video/mp4"
                alt={`${person.name} Person`}
              />
              <audio src="/static/sound/moment/01-COMMON_stem2_rugrat.mp3"></audio>
              <tf>
                <button
                  onClick={(e) => {
                    handleDelete(person._id);
                  }}
                >
                  Delete
                </button>{" "}
                {/* <DeletePerson />|{" "} */}
                <button
                  onClick={(e) => {
                    navigate(`/people/${person._id}/edit`);
                  }}
                >
                  Edit
                </button>
              </tf>
              <hr />
            </table>
          );
        })}
      </div>
    </div>
  );
};

export default People;
