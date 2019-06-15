import React from "react";
import Button from "../button";
import "./stateLoader.css";
import SaveStateCard from "../savedStateCard";
import { saveState } from "../../utils/localStorageManager";

const StateLoader = props => {
  return (
    <div className="load-container">
      <ul className="states-container">
        {props.availableStates.length
          ? props.availableStates.map(state => (
              <SaveStateCard
                onDelete={props.onDelete}
                onLoad={props.onLoad}
                state={state}
                key={state}
              />
            ))
          : "No available states"}
      </ul>
      <div>
        <Button onClick={props.onRefresh}>Refresh State List</Button>
        <Button onClick={props.onDeleteAll}>Delete All Saves</Button>
        <Button onClick={props.onClose}>Close</Button>
      </div>
    </div>
  );
};

export default StateLoader;
