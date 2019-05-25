import generateGrid, { cellSize } from "./generateGrid";

describe("generateGrid should", () => {
  it("exist", () => {
    expect(generateGrid).toBeDefined();
  });

  it("generate properly sized grids", () => {
    const [x, y] = [600, 400];
    const result = generateGrid(x, y);
    expect(result.length).toBe(Math.floor(y / cellSize.y));
    expect(result[0].length).toBe(Math.floor(x / cellSize.x));
  });

  it("build an empty grid if no third parameter is passed or is 0", () => {
    const [x, y] = [600, 400];
    let result = generateGrid(x, y);
    result.forEach(row => expect(row.every(cell => cell === 0)).toBe(true));
    result = generateGrid(x, y, 0);
    result.forEach(row => expect(row.every(cell => cell === 0)).toBe(true));
  });

  it("build a full grid if the third parameter is passed as 1", () => {
    const [x, y] = [600, 400];
    const result = generateGrid(x, y, 1);
    result.forEach(row => expect(row.every(cell => cell === 1)).toBe(true));
  });

  it("build a grid where alive cells are roughly the same as the third parameter value as a percentage", () => {
    const [x, y] = [800, 600];
    const tolerance = 0.08;
    const testPercentages = [0.2, 0.5, 0.9];
    const checkRandomGrid = percentageAlive => {
      let aliveCount = 0,
        totalCells = 0;
      const result = generateGrid(x, y, percentageAlive);
      result.forEach(row => row.forEach(cell => (aliveCount += cell)));
      totalCells = result.length * result[0].length;
      expect(
        Math.abs(aliveCount / totalCells - percentageAlive) <= tolerance
      ).toBe(true);
    };
    testPercentages.forEach(testValue => checkRandomGrid(testValue));
  });
});
