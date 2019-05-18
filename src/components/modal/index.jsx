import React from "react";
import Overlay from "../overlay";
import "./modal.css";

const Modal = props => (
  <Overlay onClick={props.onClick} open={props.open}>
    <div className="modal-container">{props.children}</div>
  </Overlay>
);

export default Modal;
