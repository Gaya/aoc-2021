import { countPolymers, leastAvailablePolymer, mostAvailablePolymer, stepPolymer } from './polymer';

describe('polymer', () => {
  describe('stepPolymer', () => {
    const template = 'NNCB';
    const insertions: [string, string][] = [
      ['CH', 'B'],
      ['HH', 'N'],
      ['CB', 'H'],
      ['NH', 'C'],
      ['HB', 'C'],
      ['HC', 'B'],
      ['HN', 'C'],
      ['NN', 'C'],
      ['BH', 'H'],
      ['NC', 'B'],
      ['NB', 'B'],
      ['BN', 'B'],
      ['BB', 'N'],
      ['BC', 'B'],
      ['CC', 'N'],
      ['CN', 'C'],
    ];

    it('should match the steps from the example', () => {
      const outcome1  = stepPolymer(template, insertions);
      const outcome2  = stepPolymer(outcome1, insertions);
      const outcome3  = stepPolymer(outcome2, insertions);
      const outcome4  = stepPolymer(outcome3, insertions);

      expect(outcome1).toEqual('NCNBCHB');
      expect(outcome2).toEqual('NBCCNBBBCBHCB');
      expect(outcome3).toEqual('NBBBCNCCNBBNBNBBCHBHHBCHB');
      expect(outcome4).toEqual('NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB');
    });
  });

  describe('countPolymers', () => {
    it('should count letters', () => {
      expect(countPolymers('AAABBC')).toEqual({ A: 3, B: 2, C: 1 });
    });
  });

  describe('leastAvailablePolymer', () => {
    it('should return the least common letter', () => {
      expect(leastAvailablePolymer('AAABBC').letter).toEqual('C');
    });
  });

  describe('mostAvailablePolymer', () => {
    it('should return the most common letter', () => {
      expect(mostAvailablePolymer('AAABBC').letter).toEqual('A');
    });
  });
});