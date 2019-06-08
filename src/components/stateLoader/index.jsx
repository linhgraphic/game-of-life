import React from "react";
import Button from "../button";
import "./stateLoader.css";

const StateLoader = props => {
  return (
    <div className="load-container">
      <div className="states-container">
        {props.availableStates.length
          ? props.availableStates.map(state => <div>{state}</div>)
          : "No available states"}
      </div>
      <div>
        <Button onClick={props.onRefresh}>Refresh State List</Button>
        <Button onClick={props.onDelete}>Delete All Saves</Button>
        <Button onClick={props.onClose}>Close</Button>
      </div>
    </div>
  );
};

export default StateLoader;
