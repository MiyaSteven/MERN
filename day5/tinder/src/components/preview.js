import React, { useState } from "react";

const PlayerCard = (props) => {
  const [pointCount, setPointCount] = useState(props.pointCount);

  const styles = {
    profilePic: {
      borderRadius: 20,
      width: 200 + pointCount * 10,
      height: 200 + pointCount * 10,
    },
    basketballIcon: {
      fontSize: 30,
      cursor: "pointer",
    },
    heart: {
      color: "red",
    },
  };

  return (
    <div>
      <h2>
        <h3>First Name: {props.firstName}</h3>
        <h3>Last Name: {props.lastName}</h3>
        {pointCount >= 10 ? (
          <span role="img" aria-label="fire / hot">
            🔥
          </span>
        ) : (
          ""
        )}
      </h2>
      <img style={styles.profilePic} src={props.imgUrl} alt="profile" />
      <p>
        <span
          onClick={(event) => {
            setPointCount(pointCount + 1);
          }}
          style={styles.basketballIcon}
          role="img"
          aria-label="thumbs up"
        >
          🏀
        </span>{" "}
        {/* because we are looping based on a count, not an array, but .map needs to use an array, we either have to write a helper function with a for loop inside that pushes JSX into an array and returns the array, or we create a new array with any item in it repeated however many times we want to loop: */}
        {new Array(pointCount).fill(1).map((irrelevantItem, idx) => {
          return (
            <span key={idx} style={styles.heart} role="img" aria-label="heart">
              &#10084;
            </span>
          );
        })}
      </p>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default PlayerCard;
