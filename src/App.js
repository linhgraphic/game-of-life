import React from "react";
import "./App.css";
import Board from "./components/board";

function App() {
  return (
    <div className="App">
      <Board width={1000} height={600} />
    </div>
  );
}

export default App;
