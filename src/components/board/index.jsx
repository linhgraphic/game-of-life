import React from "react";
import Cell from "../cell";
import "./board.css";
import generateGrid from "../../utils/generateGrid";
import Button from "../button";
import Modal from "../modal";
import Options from "../options";
import boardTick from "../../utils/boardTick";

export default class Board extends React.Component {
  state = {
    paused: true,
    board: generateGrid(this.props.width, this.props.height),
    options: {
      startingAlive: 0.2,
      minCellAlive: 2,
      maxCellAlive: 3,
      minCellDead: 3,
      maxCellDead: 3,
      interval: 100
    }
  };
  toggleModal = event => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };
  handleStart = event => {
    this.setState(
      { paused: !this.state.paused },
      !this.state.paused ? () => null : this.generateTick
    );
  };
  generateTick = event => {
    setTimeout(
      () =>
        this.setState(
          {
            board: boardTick(
              this.state.board,
              this.state.options.minCellAlive,
              this.state.options.maxCellAlive,
              this.state.options.minCellDead,
              this.state.options.maxCellDead
            )
          },
          this.state.paused ? () => null : this.generateTick
        ),
      this.state.options.interval
    );
  };
  resetGrid = event => {
    this.setState({
      board: generateGrid(
        this.props.width,
        this.props.height,
        this.state.options.startingAlive
      )
    });
  };
  onChangeOptions = event => {
    this.setState({
      options: {
        [event.target.id]: event.target.value
      }
    });
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
          <Options
            onChange={this.onChangeOptions}
            options={this.state.options}
            onClose={this.toggleModal}
            onReset={this.resetGrid}
          />
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
          <Button onClick={this.handleStart}>
            {this.state.paused ? "Start" : "Stop"}
          </Button>
          <Button onClick={this.toggleModal}>Settings</Button>
          <Button onClick={this.resetGrid}>Reset</Button>
        </div>
      </>
    );
  }
}
