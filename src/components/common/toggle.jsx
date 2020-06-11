import React, { useState } from "react";
import MediaQuery from "react-responsive";
import NavBar from "../navigation/navbar";

const Toggle = ({ navigations }) => {
  const [expand, setExpand] = useState(false);

  const navClassName = expand ? "x" : "line";

  const x = expand ? "x" : null;

  return (
    <React.Fragment>
      <MediaQuery maxDeviceWidth={768}>
        <div className="hamburger-container">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setExpand(!expand)}
            className="hamburger"
          >
            <div className={navClassName}>{x}</div>
            <div className={navClassName}></div>
            <div className={navClassName}></div>
          </div>
        </div>
        {expand && <NavBar navigations={navigations} />}
      </MediaQuery>
    </React.Fragment>
  );
};

export default Toggle;
