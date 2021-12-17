import { expandMap } from './parse';

describe('parse', () => {
  describe('expandMap', () => {
    const weights = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 1, 2, 3],
      [4, 5, 6, 7],
    ];

    it('should expand the map once if factor is one', () => {
      expect(expandMap(weights, 1)).toEqual([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 1, 2, 3],
        [4, 5, 6, 7],
      ]);
    });

    it('should expand the map once if factor is two', () => {
      expect(expandMap(weights, 2)).toEqual([
        [1, 2, 3, 4, 2, 3, 4, 5],
        [5, 6, 7, 8, 6, 7, 8, 9],
        [9, 1, 2, 3, 1, 2, 3, 4],
        [4, 5, 6, 7, 5, 6, 7, 8],
        [2, 3, 4, 5, 3, 4, 5, 6],
        [6, 7, 8, 9, 7, 8, 9, 1],
        [1, 2, 3, 4, 2, 3, 4, 5],
        [5, 6, 7, 8, 6, 7, 8, 9],
      ]);
    });
  });
});