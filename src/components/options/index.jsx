import React from "react";
import Button from "../button";

const Options = props => (
  <div className="options-container">
    <div className="options">
      <div>Placeholder 1</div>
      <div>Placeholder 2</div>
      <div>Placeholder 3</div>
      <div>Placeholder 4</div>
      <div>Placeholder 5</div>
    </div>

    <div className="options">
      <Button>Save</Button>
      <Button onClick={props.onClose}>Close</Button>
    </div>
  </div>
);

export default Options;
