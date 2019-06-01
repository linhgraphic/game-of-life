import boardTick from "./boardTick";

describe("boardTick should", () => {
  it("exist", () => {
    expect(boardTick).toBeDefined();
  });
  it("return a board of the same size", () => {
    const sampleBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    const result = boardTick(sampleBoard);
    expect(result.length).toEqual(sampleBoard.length);
    expect(result[0].length).toEqual(sampleBoard[0].length);
  });
  it("return the board of the next tick", () => {
    const sampleBoard = [[0, 1, 1], [0, 0, 1], [0, 0, 0]];
    let result = boardTick(sampleBoard, 2, 3, 3, 3);
    expect(result).toEqual([[0, 1, 1], [0, 1, 1], [0, 0, 0]]);
    result = boardTick(result, 2, 3, 3, 3);
    expect(result).toEqual([[0, 1, 1], [0, 1, 1], [0, 0, 0]]);
    const sampleBoard2 = [
      [1, 0, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 0],
      [0, 0, 1, 0]
    ];
    result = boardTick(sampleBoard2, 2, 3, 3, 3);
    expect(result).toEqual([
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ]);
    result = boardTick(result, 2, 3, 3, 3);
    expect(result).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]);
  });
});
