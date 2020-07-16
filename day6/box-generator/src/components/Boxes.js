import React, { useState } from "react";

const Boxes = (props) => {
  const [color, setBoxes] = useState("");

  const boxList = [
    {
      color: "red",
    },
    {
      color: "yellow",
    },
    {
      color: "green",
    },
    {
      color: "blue",
    },
    {
      color: "purple",
    },
  ];

  const createBox = (e) => {
    e.preventDefault();
    setBoxes({
      color: boxList[0].color,
    });
  };

  return (
    <div>
      <button onClick={createBox}>Create Box </button>
      <div>
        {boxList.map(function (box, i) {
          let styles = {
            backgroundColor: box.color,
            width: "200px",
            height: "200px",
            display: "inline-flex",
          };
          return <div key={i} style={styles}></div>;
        })}
      </div>
    </div>
  );
};

export default Boxes;
