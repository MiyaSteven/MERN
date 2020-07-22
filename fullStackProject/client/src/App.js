import React from "react";
import "./App.css";
import { Link, Redirect, Router } from "@reach/router";

import Loading from "./views/Loading";
import NewPerson from "./views/NewPerson";
import People from "./views/People";
import Person from "./views/Person";
import EditPerson from "./views/EditPerson";

function App() {
  return (
    <div className="App">
      <Link to="/people">People</Link> |{" "}
      <Link to="/people/new">New People</Link>
      <hr />
      <Router>
        <Redirect from="/" to="/people" noThrow="true" />
        <Loading default />
        <NewPerson path="/people/new" />
        <People path="/people/" />
        <Person path="/people/:id" />
        <EditPerson path="/people/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
