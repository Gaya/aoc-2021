const { winningBoard } = require('./bingo');
describe('bingo', () => {
  const sequence = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1];
  const boards = [
    [
      [22, 13, 17, 11,  0],
      [8,  2, 23,  4, 24],
      [21,  9, 14, 16,  7],
      [6, 10,  3, 18,  5],
      [1, 12, 20, 15, 19],
    ],
    [
      [3, 15,  0,  2, 22],
      [9, 18, 13, 17,  5],
      [19,  8,  7, 25, 23],
      [20, 11, 10, 24,  4],
      [14, 21, 16, 12,  6],
    ],
    [
      [14, 21, 17, 24,  4],
      [10, 16, 15,  9, 19],
      [18,  8, 23, 26, 20],
      [22, 11, 13,  6,  5],
      [2,  0, 12,  3,  7],
    ],
  ];

  describe('winning board', () => {
    it('should declare a winner when horizontal row is full', () => {
      expect(winningBoard(boards, [19, 20, 8, 7, 6, 23, 25])).toEqual([1, 25, 216]);
      expect(winningBoard(boards, [19, 20, 8, 7, 6, 23, 25, 56])).toEqual([1, 25, 216]);
    });

    it('should declare a winner when vertical row is full', () => {
      expect(winningBoard(boards, [0, 19, 6, 13, 5, 7, 24])).toEqual([0, 24, 226]);
      expect(winningBoard(boards, [0, 19, 6, 13, 5, 7, 24, 27])).toEqual([0, 24, 226]);
    });

    it('should not declare a winner when sequence does not make a winner', () => {
      expect(winningBoard(boards, [1, 5])).toEqual(null);
      expect(winningBoard(boards, [1, 5, 6, 14, 17, 19])).toEqual(null);
    });

    it('should pass example bingo', () => {
      expect(winningBoard(boards, sequence)).toEqual([2, 24, 188]);
    });
  });
});