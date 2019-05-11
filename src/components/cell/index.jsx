import React from "react";
import "./cell.css";

const Cell = props => (
  <div
    className="cell"
    style={{ backgroundColor: `rgba(200, 100, 100, ${props.life})` }}
    {...props}
  />
);

export default Cell;
