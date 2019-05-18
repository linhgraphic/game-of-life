import React from "react";
import "./overlay.css";

const Overlay = props => (
  <div
    onClick={props.onClick}
    className={`overlay${props.open ? " open" : ""}`}
  >
    {props.children}
  </div>
);

export default Overlay;
