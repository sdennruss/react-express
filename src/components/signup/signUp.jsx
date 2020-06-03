import React, { Component } from "react";
import Input from "../common/input";
import { useHistory } from "react-router-dom";

const SignUpForm = ({ account, errors, onChange, onSubmit }) => {
  let history = useHistory();
  function handleClick() {
    const { email, name } = account;
    if (email.includes("@") && name) return history.push("/ebook");
  }

  return (
    <React.Fragment>
      <div className="form-container">
        <h1 className="form-title">Sign up to pu</h1>
        <form onSubmit={onSubmit}>
          <div className="name-form">
            <Input
              name="name"
              value={account.name}
              label="Name"
              onChange={onChange}
              placeholder="first and last name"
              errors={errors.name}
            />
          </div>
          <Input
            name="email"
            value={account.email}
            label="Email Address"
            onChange={onChange}
            placeholder="email address"
            errors={errors.email}
          />
          <button onClick={handleClick}>Sign Me Up</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignUpForm;
