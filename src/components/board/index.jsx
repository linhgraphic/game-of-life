import React from "react";
import Cell from "../cell";
import "./board.css";
import generateGrid from "../../utils/generateGrid";
import Button from "../button";
import Modal from "../modal";
import Options from "../options";
import boardTick from "../../utils/boardTick";
import {
  deleteAllSaves,
  getAvailableSaves,
  saveState,
  deleteSave,
  loadState
} from "../../utils/localStorageManager";
import StateLoader from "../stateLoader";

export default class Board extends React.Component {
  state = {
    paused: true,
    availableStates: getAvailableSaves() || [],
    board: generateGrid(this.props.width, this.props.height),
    options: {
      startingAlive: 0.2,
      minCellAlive: 2,
      maxCellAlive: 3,
      minCellDead: 3,
      maxCellDead: 3,
      interval: 100,
      cellColour: "#008000"
    }
  };
  onDeleteAllStates = () => {
    deleteAllSaves();
    this.setState({ availableStates: [] });
  };
  onRefreshStates = () => {
    this.setState({ availableStates: getAvailableSaves() || [] });
  };
  toggleModal = event => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };
  toggleLoaderModal = event => {
    this.setState({ loaderModalVisible: !this.state.loaderModalVisible });
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
        ...this.state.options,
        [event.target.id]: event.target.value
      }
    });
  };
  clickHandler = event => {
    // dataset will read the data-*something* attribute in target, in this case giving us a {x: n, y: m} type of object
    const { x, y } = event.target.dataset;
    // generating a newBoard element, as we need to pass a new object to setState, so that React can spot the differences
    const newBoard = [...this.state.board.map(row => row.map(cell => cell))]; // or const newBoard = [...this.state.board.map(row => [...row])];
    // updating the value only of the clicked cell
    newBoard[y][x] = Number(!this.state.board[y][x]);
    // finally, updating state with the newBoard
    this.setState({ board: newBoard });
  };
  onSave = saveStateName => {
    saveState(saveStateName, this.state.board);
    this.setState({ availableStates: getAvailableSaves() || [] });
  };
  onDelete = event => {
    deleteSave(event.currentTarget.name);
    this.setState({ availableStates: getAvailableSaves() || [] });
  };
  onLoad = event => {
    this.setState({ board: loadState(event.currentTarget.name) });
  };
  render() {
    const filledCell = this.state.options.cellColour,
      emptyCell = "rgba(0,0,0,0)";
    return (
      <>
        <Modal onClose={this.toggleModal} open={this.state.modalVisible}>
          <Options
            paused={this.state.paused}
            onStart={this.handleStart}
            onChange={this.onChangeOptions}
            options={this.state.options}
            onClose={this.toggleModal}
            onReset={this.resetGrid}
            onSave={this.onSave}
          />
        </Modal>
        <Modal
          onClose={this.toggleLoaderModal}
          open={this.state.loaderModalVisible}
        >
          <StateLoader
            onSave={() => null}
            availableStates={this.state.availableStates}
            onClose={this.toggleLoaderModal}
            onRefresh={this.onRefreshStates}
            onDeleteAll={this.deleteAllSaves}
            onDelete={this.onDelete}
            onLoad={this.onLoad}
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
                    onClick={this.clickHandler}
                    cellColour={cell ? filledCell : emptyCell}
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
          <Button onClick={this.toggleLoaderModal}>Load</Button>
        </div>
      </>
    );
  }
}
