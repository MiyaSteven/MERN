import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Loading from "../components/Loading";

const AllFull = (props) => {
  const [allFull, setAllFull] = useState([]);

  //   useEffect(() => {
  //     fetchAllFull();
  //   }, []);

  function fetchAllFull() {
    axios
      .get("http://swapi.dev/api/people?limit=82&offset=0")
      .then((res) => {
        setAllFull(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (allFull === []) {
    return <Loading />;
  }

  return (
    <div>
      <h2>All Full</h2>
      <button onClick={fetchAllFull}>Fetch Full Data</button>
      {allFull.map((full, i) => {
        return (
          <div key={i}>
            <ul>
              <li
                style={{
                  textAlign: "left",
                }}
              >
                <Link to={"/allFull/" + full.id}>{full.name}</Link>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default AllFull;
