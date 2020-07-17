import React, { useState } from "react";
import Tabs from "./views/Tabs";
import "./App.css";

function App() {
  const [tabs, setTabs] = useState([
    {
      title: "Characters",
      url: "http://swapi.dev/api/people/",
      // ?search={selected}
      selected: "",
    },
    {
      title: "Planets",
      url: "http://swapi.dev/api/planets/",
      selected: "",
    },
    {
      title: "Starships",
      url: "http://swapi.dev/api/starships/",
      selected: "",
    },
  ]);
  return (
    <div>
      <Tabs tabs={tabs} setTabs={setTabs} />
    </div>
  );
}

export default App;
