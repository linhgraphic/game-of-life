import React, { useState } from "react";
import Button from "../button";
import Input from "../input";
import "./options.css";

const Options = props => {
  const [isSaveModeOpen, setIsSaveModeOpen] = useState(false);
  const [saveStateName, setSaveStateName] = useState("");
  const toggleSaveMode = () => setIsSaveModeOpen(!isSaveModeOpen);
  const onChangeSaveStateName = event => setSaveStateName(event.target.value);
  const onSubmitSave = () => props.onSave(saveStateName);

  return (
    <div className="options-container">
      <div className="options">
        <div>
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
        </div>
        <div>
          <Input
            type="range"
            id="minCellAlive"
            label={`Minimum number of neighbours for an alive cell to survive - ${
              props.options.minCellAlive
            } (Max ${props.options.maxCellAlive})`}
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
            } (Min ${props.options.minCellAlive})`}
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
            } (Max ${props.options.maxCellDead})`}
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
            } (Min ${props.options.minCellAlive})`}
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
        <div>
          <Input
            type="color"
            id="cellColour"
            label={`Select cell colour - ${props.options.cellColour}`}
            onChange={props.onChange}
            value={props.options.cellColour}
          />
        </div>
      </div>

      <div className="options">
        <Button onClick={props.onStart}>
          {props.paused ? "Start" : "Stop"}
        </Button>
        <Button onClick={toggleSaveMode}>Save</Button>
        <Button onClick={props.onClose}>Close</Button>
        <Button onClick={props.onReset}>Reset</Button>
      </div>
      <div>
        <Input
          type="text"
          onChange={onChangeSaveStateName}
          value={saveStateName}
        />
        <Button onClick={onSubmitSave}>Submit</Button>
      </div>
    </div>
  );
};

export default Options;
