import React, { useEffect, useState } from "react";

import axios from "axios";
import Loading from "../components/Loading";

const Tabs = (props) => {
  const [tabs, setTabs] = useState(null);

  useEffect(() => {
    axios
      .get(`https://https://pokeapi.co/api/v2/Tabs/${props.id}`)
      .then((res) => {
        setTabs(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  return <div></div>;
};

export default Tabs;
