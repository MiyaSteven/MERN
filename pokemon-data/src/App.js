import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = (props) => {
  const [allData, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((res) => {
          setData(res.data.results);
          allData.concat(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    setTimeout(
      fetchData(() => {
        setData().bind();
      }, 3000)
    );
  }, []);

  return (
    <div className="App">
      <ul>
        {allData.map((pokemon) => (
          <li key={pokemon.name}>
            <a href={pokemon.url}>{pokemon.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
