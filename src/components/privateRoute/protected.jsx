import React from "react";
import { Route, Redirect } from "react-router-dom";
import EBook from "../signup/ebook";

const Protected = () => {
  return (
    <div>
      <h1>This is a Protected Route</h1>
      <EBook />
    </div>
  );
};

export default Protected;
