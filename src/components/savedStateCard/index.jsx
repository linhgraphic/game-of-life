import React from "react";
import Button from "../button";
import deleteIcon from "../../assets/deleteIcon.svg";
import loadIcon from "../../assets/loadIcon.svg";
import "./savedStateCard.css";

const SavedStateCard = props => {
  return (
    <li className="saved-state-container">
      {props.state}
      <div>
        <Button name={props.state} onClick={props.onDelete}>
          <img width="20px" alt={`delete ${props.state}`} src={deleteIcon} />
        </Button>
        <Button name={props.state} onClick={props.onLoad}>
          <img width="20px" alt={`load ${props.state}`} src={loadIcon} />
        </Button>
      </div>
    </li>
  );
};

export default SavedStateCard;
