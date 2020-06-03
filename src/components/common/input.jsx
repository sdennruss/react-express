import React from "react";

const Input = ({ name, label, value, placeholder, errors, onChange }) => {
  return (
    <div className="email-form">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        id={name}
        type="text"
        placeholder={placeholder}
      />

      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
