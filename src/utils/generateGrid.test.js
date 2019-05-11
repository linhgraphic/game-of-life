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
});
