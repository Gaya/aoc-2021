import { getTemplate, getPairInsertions } from './parse';

describe('parse', () => {
  const input = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`;

  describe('getTemplate', () => {
    it('should get the template input from the input string', () => {
      expect(getTemplate(input)).toEqual('NNCB');
    });
  });

  describe('getPairInsertions', () => {
    it('should get the pair insertions from the input string', () => {
      expect(getPairInsertions(input)).toEqual([
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
      ]);
    });
  });
});