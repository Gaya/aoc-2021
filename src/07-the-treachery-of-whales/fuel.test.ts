import { leastFuel, fuelToPosition } from './fuel';

describe('fuel', () => {
  describe('fuelToPosition', () => {
    it('should return the fuel required for crabs to reach the given position', () => {
      expect(fuelToPosition([16, 1, 2, 0, 4, 2, 7, 1, 2, 14], 2)).toBe(37);
      expect(fuelToPosition([16, 1, 2, 0, 4, 2, 7, 1, 2, 14], 10)).toBe(71);
    });

    it('should return the true fuel required for crabs to reach the given position', () => {
      expect(fuelToPosition([16, 1, 2, 0, 4, 2, 7, 1, 2, 14], 2, true)).toBe(206);
      expect(fuelToPosition([16, 1, 2, 0, 4, 2, 7, 1, 2, 14], 5, true)).toBe(168);
    });
  });

  describe('leastFuel', () => {
    it('should determine the least wasteful position to move crabs to', () => {
      expect(leastFuel([16, 1, 2, 0, 4, 2, 7, 1, 2, 14])).toEqual(37);
    });

    it('should determine the least wasteful position to move crabs to when exponential', () => {
      expect(leastFuel([16, 1, 2, 0, 4, 2, 7, 1, 2, 14], true)).toEqual(168);
    });
  });
});