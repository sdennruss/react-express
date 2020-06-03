import React from "react";

const BirthYearInput = () => {
  const birthYear = 1920;

  const birthYearOptions = birthYear
    ? [<option>{birthYear + 1}</option>]
    : null;

  return (
    <React.Fragment>
      <div>
        <select></select>
      </div>
    </React.Fragment>
  );
};

export default BirthYearInput;
