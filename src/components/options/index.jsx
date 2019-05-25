import React from "react";
import Button from "../button";
import Input from "../input";

const Options = props => (
  <div className="options-container">
    <div className="options">
      <Input
        type="range"
        id="startingAlive"
        label="Percentage of starting living cells"
        min={0}
        max={1}
        onChange={props.onChange}
        step={0.01}
        value={props.options.startingAlive}
      />
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
