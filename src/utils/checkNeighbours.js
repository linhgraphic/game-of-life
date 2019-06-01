const checkNeighbours = (grid, x, y) => {
  let aliveCount = 0;
  for (let row = y - 1; row <= y + 1; row++) {
    for (let col = x - 1; col <= x + 1; col++) {
      if (grid[row] && grid[row][col]) aliveCount++;
    }
  }
  return aliveCount - Boolean(grid[y][x]);
};

export default checkNeighbours;
