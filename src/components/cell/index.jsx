import React from "react";
import "./cell.css";

const Cell = props => (
  <div
    className="cell"
    style={{
      backgroundColor: props.cellColour
    }}
    {...props}
  />
);

export default Cell;
