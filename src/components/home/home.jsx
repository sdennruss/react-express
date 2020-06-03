import React from "react";
import Cards from "./cards";
import DepartureTable from "../table/departureTable";

const Home = ({ departures }) => {
  return (
    <React.Fragment>
      <div className="home-container">
        <h1 className="title">The Sweet Escape.</h1>
        <p className="sub-title">An exit plan worth exploring.</p>
      </div>
      <DepartureTable departures={departures} />
      <Cards />
    </React.Fragment>
  );
};

export default Home;
