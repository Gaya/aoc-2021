import { nextDay, cycleDays, listToLedger, countFish } from './lifeCycle';

describe('lifeCycle', () => {
  describe('listToLedger', () => {
    it('should return a ledger based on list of fishes', () => {
      expect(listToLedger([6, 6, 6, 0, 0, 0])).toEqual({ 0: 3, 6: 3 });
    });
  });

  describe('countFish', () => {
    it('should return the number of fish in the ledger', () => {
      expect(countFish({ 0: 3, 6: 3 })).toEqual(6);
    });
  });


  describe('nextDay', () => {
    it('should count down a time to deliver of a single lanternfish', () => {
      expect(nextDay({ 3: 1 })).toEqual({ 0: 0, 1: 0, 2: 1, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 });
    });

    it('should create a new fish when delivering', () => {
      expect(nextDay({ 0: 1 })).toEqual({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 1, 7: 0, 8: 1 });
    });

    it('should handle a large number of fishes', () => {
      expect(
        nextDay(listToLedger([0, 1, 0, 5, 6, 0, 1, 2, 2, 3, 7, 8]))
      ).toEqual({ 0: 2, 1: 2, 2: 1, 3: 0, 4: 1, 5: 1, 6: 4, 7: 1, 8: 3 });
    });
  });

  describe('cycle', () => {
    it('should cycle fishes for given amount of days', () => {
      expect(cycleDays(listToLedger([3, 4, 3, 1, 2]), 18))
        .toEqual({ 0: 3, 1: 5, 2: 3, 3: 2, 4: 2, 5: 1, 6: 5, 7: 1, 8: 4 });
    });
  });
});