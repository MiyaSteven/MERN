import React, { useState } from "react";
import { Row } from "reactstrap";

// Mock API Response for playerList
const playersList = {
  player: [
    {
      firstName: "Stephen",
      lastName: "Curry",
      age: "31",
      position: "Point Guard",
      status: "Injured",
    },
    {
      firstName: "Giannis",
      lastName: "Antetokounmpo",
      age: "24",
      position: "Small Forward",
      status: "Out",
    },
  ],
};

const PlayerCard = (props) => {
  const [firstName, setName] = useState("Stephen");
  const [lastName, setLastName] = useState("Curry");
  const [age, setAge] = useState({
    ageCount: 31,
  });
  const ageHandler = (e) => {
    setAge({
      ageCount: age.ageCount + 1,
    });
  };
  const [position, setPosition] = useState("Point Guard");
  const [status, setStatus] = useState("Healthy");

  // useEffect(() => {
  //   document.title = name + " " + lastName;
  // });

  // const [width, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handlePositionChange(e) {
    setPosition(e.target.value);
  }

  function changeStatus(e) {
    setStatus(e.target.value);
  }

  return (
    <section>
      <Row label="Name">{firstName}</Row>
      <Row label="LastName">{lastName} </Row>
      <Row label="Age">Age: {age.ageCount} </Row>
      <Row label="Position">
        Position: <input value={position} onChange={handlePositionChange} />
      </Row>

      <Row label="Status">🏀 {status}</Row>
      <button onClick={ageHandler}>Click on Birthday!</button>
      {/* <Row label="Language">{locale}</Row>
      <Row label="Width">{width}</Row> */}
    </section>
  );
};

export default PlayerCard;
