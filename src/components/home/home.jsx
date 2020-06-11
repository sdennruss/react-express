import React from "react";
import Cards from "./cards";
import DepartureTable from "../table/departureTable";
import RegisterForm from "../register/register";

const Home = ({
  departures,
  data,
  errors,
  history,
  onSubmit,
  onChange,
  onValidation,
}) => {
  return (
    <React.Fragment>
      <div className="home-container">
        <h1 className="title">The Sweet Escape.</h1>
        <p className="sub-title">An exit plan worth exploring.</p>
      </div>
      <DepartureTable departures={departures} />
      <Cards />
      <RegisterForm
        onSubmit={onSubmit}
        onChange={onChange}
        onValidation={onValidation}
        data={data}
        errors={errors}
        history={history}
      />
    </React.Fragment>
  );
};

export default Home;
