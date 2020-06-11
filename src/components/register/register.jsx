import React from "react";
import Input from "../common/input";

const RegisterForm = ({
  onValidation,
  onSubmit,
  onChange,
  data,
  errors,
  history,
}) => {
  return (
    <React.Fragment>
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <Input
          name="name"
          value={data.name}
          label="Name"
          onChange={onChange}
          placeholder="first and last name"
          errors={errors.name}
        />
        <Input
          name="email"
          value={data.email}
          label="email"
          onChange={onChange}
          placeholder="email address"
          errors={errors.email}
        />

        <button onClick={onSubmit} disabled={onValidation()}>
          Sign Up
        </button>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
