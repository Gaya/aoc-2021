import { countFlashes, findAllFlashing, nextStep, toGrid } from './flashing';

describe('flashing', () => {
  describe('nextStep', () => {
    it('should return the next step', () => {
      const step1 = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

      const step2 = `6594254334
3856965822
6375667284
7252447257
7468496589
5278635756
3287952832
7993992245
5957959665
6394862637`;

      const step3 = `8807476555
5089087054
8597889608
8485769600
8700908800
6600088989
6800005943
0000007456
9000000876
8700006848`;

      expect(nextStep(toGrid(step1))).toEqual(toGrid(step2));
      expect(nextStep(toGrid(step2))).toEqual(toGrid(step3));
    });
  });

  describe('countFlashes', () => {
    it('should return the number of flashes', () => {
      const step1 = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

      expect(countFlashes(step1, 100)).toEqual(1656);
    });
  });

  describe('findAllFlashing', () => {
    it('should figure out when all the lights are flashing', () => {
      const step1 = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

      expect(findAllFlashing(step1)).toEqual(195);
    });
  });
});