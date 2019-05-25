export const cellSize = { x: 32, y: 32 };

const generateGrid = (width, height, percentageAlive) => {
  const row = Math.floor(height / cellSize.y);
  const col = Math.floor(width / cellSize.x);
  return Array.from({ length: row }, () =>
    Array.from({ length: col }, () => Number(Math.random() < percentageAlive))
  );
};
export default generateGrid;
