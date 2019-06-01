import checkNeighbours from "./checkNeighbours";

const boardTick = (
  board,
  minNeighAlive,
  maxNeighAlive,
  minNeighDead,
  maxNeighDead
) => {
  return board.map((row, y) =>
    row.map((cell, x) => {
      const neighbours = checkNeighbours(board, x, y);
      if (cell !== 0) {
        if (neighbours <= maxNeighAlive && neighbours >= minNeighAlive) {
          return 1;
        }
      } else {
        if (neighbours <= maxNeighDead && neighbours >= minNeighDead) {
          return 1;
        }
      }
      return 0;
    })
  );
};

export default boardTick;
