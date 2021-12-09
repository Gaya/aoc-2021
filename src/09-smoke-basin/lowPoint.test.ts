import { findBasinSizes, findLowPoints, riskLevel } from './lowPoint';

const testData = `1499923210
3987894921
9856789892
3767896711
9899965678`;

const testBasins = `2199943210
3987894921
9856789892
8767896789
9899965678`;

describe('lowPoint', () => {
  describe('findLowPoints', () => {
    it('should find low points from example data set', () => {
      expect(findLowPoints(testData)).toEqual([
        [0, 0, 1],
        [5, 0, 2],
        [9, 0, 0],
        [2, 2, 5],
        [0, 3, 3],
        [6, 4, 5],
      ]);
    });
  });

  describe('riskLevel', () => {
    it('should correctly calculate the risk level of height map', () => {
      expect(riskLevel(testData)).toEqual(22);
    });
  });

  describe('findBasins', () => {
    it('should find basins and their size', () => {
      expect(findBasinSizes(testBasins)).toEqual([3, 9, 14, 9]);
    });
  });
});