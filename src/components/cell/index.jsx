import React from "react";
import "./cell.css";

const Cell = ({ cellColour, ...props }) => (
  <div
    className="cell"
    style={{
      backgroundColor: cellColour
    }}
    {...props}
  />
);

export default Cell;
