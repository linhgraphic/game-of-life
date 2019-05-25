import checkNeighbours from "./checkNeighbours";

describe("checkNeighbours should", () => {
  it("exist", () => {
    expect(checkNeighbours).toBeDefined();
  });
  it("find the exact number of (alive = non 0) neighbours when passed a grid and a coordinate", () => {
    const testGrid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 1, 1, 1, 0]
    ];

    expect(checkNeighbours(testGrid, 2, 2)).toBe(2);
    expect(checkNeighbours(testGrid, 5, 1)).toBe(0);
    expect(checkNeighbours(testGrid, 2, 4)).toBe(3);
    expect(checkNeighbours(testGrid, 4, 2)).toBe(3);
  });
});
