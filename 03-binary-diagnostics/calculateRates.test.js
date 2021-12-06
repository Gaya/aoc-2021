const { gammaRate, epsilonRate } = require('./calculateRates');

describe('calculateRates', () => {
  const binaryList = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
  ];

  describe('gammaRate', () => {
    it('should return the correct gamma rate given a list of binary strings', () => {
      expect(gammaRate(binaryList, 'gamma')).toBe(22);
    });
  });

  describe('epsilonRate', () => {
    it('should return the correct epsilon rate given a list of binary strings', () => {
      expect(epsilonRate(binaryList, 'epsilon')).toBe(9);
    });
  });
});