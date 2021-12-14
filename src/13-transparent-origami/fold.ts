import { Grid, GridPoint, Instruction } from './parseInput';

export function foldGrid(grid: Grid, [axis, position]: Instruction): Grid {
  const a: Grid = grid.filter(([x, y]) => (axis === 'y' ? y : x) < position);
  const b: Grid = grid
    .filter(([x, y]) => (axis === 'y' ? y : x) > position)
    .map(([x, y]): GridPoint => axis === 'y' ? [x, y - ((y - position) * 2)] : [x - ((x - position) * 2), y]);

  const combined = b.reduce((acc, p) => {
    if (acc.some(([x, y]) => x === p[0] && y === p[1])) {
      return acc;
    }

    return [...acc, p];
  }, a);

  // sort the coordinates for testing
  combined.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  return combined;
}