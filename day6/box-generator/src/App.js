import React, { useState } from "react";
import Boxes from "./components/Boxes";
import "./App.css";

function App() {
  const [state, setState] = useState({
    name: "",
    color: "",
    boxCount: "",
    imgUrl: "",
  });
  return (
    <div className="App">
      <Box />
    </div>
  );
}

export default App;
