import { Line, linesToCoords, overlappingPoints, parseInput } from './linePoints';

describe('linePoints', () => {
  describe('parseInput', () => {
    it('parses the input correctly', () => {
      expect(parseInput('0,9 -> 5,9')).toEqual([[0, 9], [5, 9]]);
      expect(() => parseInput('14,29 -> -12,-30')).toThrow();
    });
  });

  describe('linesToCoords', () => {
    it('converts lines to coordinates', () => {
      const lines: Line[] = [
        [[1, 0], [1, 3]],
        [[2, 2], [0, 2]],
      ];

      expect(linesToCoords(lines)).toEqual(['1,0', '1,1', '1,2', '1,3', '2,2', '1,2', '0,2']);
    });
  });

  describe('overlappingPoints', () => {
    const inputs = [
      '0,9 -> 5,9',
      '0,9 -> 2,9',
      '8,0 -> 0,8',
      '9,4 -> 3,4',
      '2,2 -> 2,1',
      '7,0 -> 7,4',
      '6,4 -> 2,0',
      '0,9 -> 2,9',
      '3,4 -> 1,4',
      '0,0 -> 8,8',
      '5,5 -> 8,2',
    ];

    it('should calculate the correct number of overlapping points', () => {
      expect(overlappingPoints(inputs)).toEqual(5);
    });
  });
});