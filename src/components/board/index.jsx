import React from "react";
import Cell from "../cell";
import "./board.css";
import generateGrid from "../../utils/generateGrid";
import Button from "../button";
import Modal from "../modal";
import Options from "../options";

export default class Board extends React.Component {
  state = { board: generateGrid(this.props.width, this.props.height) };
  toggleModal = event => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };
  clickHandler = event => {
    // dataset will read the data-*something* attribute in target, in this case giving us a {x: n, y: m} type of object
    console.log(event.target.dataset);
    const { x, y } = event.target.dataset;
    // generating a newBoard element, as we need to pass a new object to setState, so that React can spot the differences
    const newBoard = [...this.state.board.map(row => row.map(cell => cell))]; // or const newBoard = [...this.state.board.map(row => [...row])];
    // updating the value only of the clicked cell
    newBoard[y][x] = Number(!this.state.board[y][x]);
    // finally, updating state with the newBoard
    this.setState({ board: newBoard });
  };
  render() {
    return (
      <>
        <Modal onClose={this.toggleModal} open={this.state.modalVisible}>
          <Options onClose={this.toggleModal} />
        </Modal>
        <div className="board-container">
          <div className="board">
            {this.state.board.map((row, y) => (
              <div key={y} className="board-row">
                {row.map((cell, x) => (
                  <Cell
                    key={x}
                    data-x={x}
                    data-y={y}
                    life={cell}
                    onClick={this.clickHandler}
                  />
                ))}
              </div>
            ))}
          </div>
          <Button>Start</Button>
          <Button onClick={this.toggleModal}>Settings</Button>
        </div>
      </>
    );
  }
}
