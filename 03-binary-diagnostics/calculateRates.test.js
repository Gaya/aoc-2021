const { gammaRate, epsilonRate, oxygenGeneratorRating, co2ScrubberRating } = require('./calculateRates');

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
      expect(gammaRate(binaryList)).toBe(22);
    });
  });

  describe('epsilonRate', () => {
    it('should return the correct epsilon rate given a list of binary strings', () => {
      expect(epsilonRate(binaryList)).toBe(9);
    });
  });

  describe('oxygenGeneratorRating', () => {
    it('should return the correct oxygen generator rating given a list of binary strings', () => {
      expect(oxygenGeneratorRating(binaryList)).toBe(23);
    });
  });

  describe('co2ScrubberRating', () => {
    it('should return the correct CO2 scrubber rating given a list of binary strings', () => {
      expect(co2ScrubberRating(binaryList)).toBe(10);
    });
  });
});