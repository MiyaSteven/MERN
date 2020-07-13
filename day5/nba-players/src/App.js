import React from "react";
import "./App.css";
import PlayerCard from "./components/PlayerCard";

function App() {
  return (
    <div>
      <PlayerCard
        firstName={" "}
        lastName={" "}
        age={" "}
        position={" "}
        status={" "}
      />
      <img
        src="https://nbatopshot.com/cdn-cgi/image/width=582/https://assets.nbatopshot.com/editions/1_from_the_top_legendary/f552b506-b41d-4e7c-ac5a-59427f9e96e6/play_f552b506-b41d-4e7c-ac5a-59427f9e96e6_1_from_the_top_legendary_capture_Hero_2880_2880_Black.jpg"
        height="200px"
        width="200px"
        alt="Stephen"
      ></img>
    </div>
  );
}

export default App;
