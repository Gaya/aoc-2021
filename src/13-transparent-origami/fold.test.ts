import { foldGrid } from './fold';
import { Grid } from './parseInput';

describe('fold', () => {
  describe('foldGrid', () => {
    const grid: Grid = [
      [3, 0],
      [6, 0],
      [9, 0],
      [4, 1],
      [0, 3],
      [3, 4],
      [8, 4],
      [10, 4],
      [1, 10],
      [6, 10],
      [8, 10],
      [9, 10],
      [4, 11],
      [6, 12],
      [10, 12],
      [0, 13],
      [0, 14],
      [2, 14],
    ];

    const afterFold: Grid = [
      [0, 0],
      [2, 0],
      [3, 0],
      [6, 0],
      [9, 0],
      [0, 1],
      [4, 1],
      [6, 2],
      [10, 2],
      [0, 3],
      [4, 3],
      [1, 4],
      [3, 4],
      [6, 4],
      [8, 4],
      [9, 4],
      [10, 4],
    ];

    const afterSecondFold = [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [0, 1],
      [4, 1],
      [0, 2],
      [4, 2],
      [0, 3],
      [4, 3],
      [0, 4],
      [1, 4],
      [2, 4],
      [3, 4],
      [4, 4],
    ];

    it('should correctly fold the grid horizontally', () => {
      const outcome = foldGrid(grid, ['y', 7]);
      expect(outcome).toEqual(afterFold);
    });

    it('should correctly fold the grid vertically', () => {
      const outcome = foldGrid(afterFold, ['x', 5]);
      expect(outcome).toEqual(afterSecondFold);
    });
  });
});