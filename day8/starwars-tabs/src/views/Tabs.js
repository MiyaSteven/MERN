import React, { useState, useEffect } from "react";
import axios from "axios";

// delete ghost code once you understand the data flow
const Tabs = (props) => {
  const { tabs, setTabs } = props;
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    axios
      .get(tabs[0].url)
      .then((response) => setDisplay(response.data.results))
      .catch((error) => setDisplay("Error Occurred"));
  }, []);

  const changeTab = (e, i) => {
    const [...curTabs] = tabs;
    // console.log("Curtabs:", curTabs);
    // console.log("tabs (from State):", tabs);
    for (let tab of curTabs) {
      tab.selected = false;
    }

    setDisplay("awaiting response...");

    axios
      .get(curTabs[i].url)
      .then((response) => setDisplay(response.data.results))
      .catch((error) => console.log("An error has occured getting data"));
    // console.log("this is read before async get and then request");
    curTabs[i].selected = true;
    setTabs(curTabs);
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={(e) => changeTab(e, i)}
            className={
              tab.selected
                ? "col-sm-3 m-1 btn btn-primary"
                : "col-sm-3 m-1 btn btn-secondary"
            }
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="col-sm-12">
        {display == "awaiting response..." ? (
          display
        ) : (
          <ul>
            {display.map((item, i) => (
              <li key={i}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Tabs;
