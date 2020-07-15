import React from "react";
import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import Homepage from "./views/Homepage";
import Secondary from "./views/Secondary";
import AllPokemon from "./views/AllPokemon";
import Pokemon from "./views/Pokemon";

function App() {
  return (
    <div className="App">
      <Link to="/">Homepage</Link> | <Link to="/secondary">Secondary</Link> |{" "}
      <Link to="/allPokemon">All Pokemon:</Link>
      <hr />
      <Router>
        {/* path is the URL to this view (component that represents a page) */}
        <Homepage path="/" />
        <Secondary path="/Secondary" />
        <AllPokemon path="/allPokemon" />
        <Pokemon path="allPokemon/:id" />
        <Redirect from="/home" to="/" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
