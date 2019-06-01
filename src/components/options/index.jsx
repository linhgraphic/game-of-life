import React from "react";
import Button from "../button";
import Input from "../input";

const Options = props => (
  <div className="options-container">
    <div className="options">
      <Input
        type="range"
        id="startingAlive"
        label={`Percentage of starting living cells - ${Math.round(
          props.options.startingAlive * 100
        )}%`}
        min={0}
        max={1}
        onChange={props.onChange}
        step={0.01}
        value={props.options.startingAlive}
      />
      <div>
        <Input
          type="range"
          id="minCellAlive"
          label={`Minimum number of neighbours for an alive cell to survive - ${
            props.options.minCellAlive
          }`}
          min={0}
          max={props.options.maxCellAlive}
          onChange={props.onChange}
          value={props.options.minCellAlive}
        />
      </div>
      <div>
        <Input
          type="range"
          id="maxCellAlive"
          label={`Maximum number of neighbours for an alive cell to survive - ${
            props.options.maxCellAlive
          }`}
          min={props.options.minCellAlive}
          max={8}
          onChange={props.onChange}
          value={props.options.maxCellAlive}
        />
      </div>
      <div>
        <Input
          type="range"
          id="minCellDead"
          label={`Minimum number of neighbours for a dead cell to come alive - ${
            props.options.minCellDead
          }`}
          min={0}
          max={props.options.maxCellDead}
          onChange={props.onChange}
          value={props.options.minCellDead}
        />
      </div>
      <div>
        <Input
          type="range"
          id="maxCellDead"
          label={`Maximum number of neighbours for a dead cell to come alive - ${
            props.options.maxCellDead
          }`}
          min={props.options.minCellDead}
          max={8}
          onChange={props.onChange}
          value={props.options.maxCellDead}
        />
      </div>
      <div>
        <Input
          type="range"
          id="interval"
          label={`Interval of each tick - ${props.options.interval}ms`}
          min={25}
          max={2000}
          step={25}
          onChange={props.onChange}
          value={props.options.interval}
        />
      </div>
    </div>

    <div className="options">
      <Button>Save</Button>
      <Button onClick={props.onClose}>Close</Button>
      <Button onClick={props.onReset}>Reset</Button>
    </div>
  </div>
);

export default Options;
