import React from "react";

const Input = props => (
  <>
    {props.label && <label>{props.label}</label>}
    <input {...props} />
  </>
);

export default Input;
