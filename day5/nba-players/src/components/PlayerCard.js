import React, { useState } from "react";
import { Row } from "reactstrap";

export default function PlayerCard(props) {
  const [firstName, setName] = useState("Steph");
  const [lastName, setLastName] = useState("Curry");
  let [age, setAge] = useState(props.age);
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
        <button
          onClick={(event) => {
            setAge(age + 1);
          }}
        ></button>
      </Row>
      {/* <Row label="Language">{locale}</Row>
      <Row label="Width">{width}</Row> */}
    </section>
  );
}
