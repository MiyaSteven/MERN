import React from "react";
import Main from "./Main";
import { Link, Redirect, Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Link to="/client/src/components/PersonList">People</Link> |{" "}
      <Link to="/client/src/views/Detail">Details</Link>
      <Main />
      <Redirect from="/home" to="/" noThrow="true" />
    </div>
  );
}

export default App;
