import React from "react";

const Input = ({ name, value, onChange, label, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        // ref={this.username}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
      {/* if error true this comp will render */}
      {error && <div className="alert alert-danger mt-2 p-1 w-25">{error}</div>}
    </div>
  );
};

export default Input;
