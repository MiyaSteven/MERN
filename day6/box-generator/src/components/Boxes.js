import React, { useState } from "react";

const Boxes = (props) => {
  const [boxes, setBoxes] = useState("");
  const [color, setColor] = useState("");

  const boxes = {
    color: "",
  };

  // add a form to allow user to submit a text entry of a valid color to get returned through the jsx style and output box with background-color: {color}
  return (
    <div id={boxes}>
      <div
        style={{ height: "200px", width: "200px", backgroundColor: { color } }}
      >
        {color} Box
      </div>
    </div>
  );
};

export default Boxes;
