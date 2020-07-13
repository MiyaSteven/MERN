import React, { useState } from "react";
import { Row } from "reactstrap";

const PlayerCard = (props) => {
  const [firstName, setName] = useState("Steph");
  const [lastName, setLastName] = useState("Curry");
  const [age, setAge] = useState({
    ageCount: 31,
  });
  const ageHandler = (e) => {
    console.log(age);
    setAge({
      ageCount: age.ageCount + 1,
    });
  };
  const [position, setPosition] = useState("Point Guard");

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

  return (
    <section>
      <Row label="Name">
        <input value={firstName} onChange={handleNameChange} />
      </Row>
      <Row label="LastName">
        <input value={lastName} onChange={handleLastNameChange} />
      </Row>
      <Row label="Age">
        <input value={age} />
      </Row>
      <Row label="Position">
        <input value={position} onChange={handlePositionChange} />
      </Row>
      <Row>
        <button onClick={ageHandler}>
          Player turned {age.ageCount} today!
        </button>
      </Row>
      {/* <Row label="Language">{locale}</Row>
      <Row label="Width">{width}</Row> */}
    </section>
  );
};

export default PlayerCard;
