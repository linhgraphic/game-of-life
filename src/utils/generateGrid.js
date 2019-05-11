export const cellSize = { x: 32, y: 32 };

const generateGrid = (width, height) => {
  const row = Math.floor(height / cellSize.y);
  const col = Math.floor(width / cellSize.x);
  return Array.from({ length: row }, () =>
    Array.from({ length: col }, () => 0)
  );
};
export default generateGrid;
