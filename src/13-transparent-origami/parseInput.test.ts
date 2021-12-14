import { getGrid, getInstructions } from './parseInput';

describe('parseInput', () => {
  const input = `6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5`;

  describe('getGrid', () => {
    it('should get the grid from the input', () => {
      expect(getGrid(input)).toEqual([
        [6, 10],
        [0, 14],
        [9, 10],
        [0, 3],
        [10, 4],
        [4, 11],
        [6, 0],
        [6, 12],
        [4, 1],
        [0, 13],
        [10, 12],
        [3, 4],
        [3, 0],
        [8, 4],
        [1, 10],
        [2, 14],
        [8, 10],
        [9, 0],
      ]);
    });
  });

  describe('getInstructions', () => {
    it('should get the instructions from the input', () => {
      expect(getInstructions(input)).toEqual([
        ['y', 7],
        ['x', 5],
      ]);
    });
  });
});