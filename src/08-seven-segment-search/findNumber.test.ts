import { decodeOutput, findNumbers, findSimpleNumber, parseInput } from './findNumber';

describe('findNumber', () => {
  describe('parseInput', () => {
    it('should parse and split input strings', () => {
      expect(
        parseInput('acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf')
      ).toEqual([
        ['acedgfb', 'cdfbe', 'gcdfa', 'fbcad', 'dab', 'cefabd', 'cdfgeb', 'eafb', 'cagedb', 'ab'],
        ['cdfeb', 'fcadb', 'cdfeb', 'cdbaf'],
      ]);
    });
  });

  describe('findSimpleNumber', () => {
    it('should find the corresponding strings for simple numbers', () => {
      expect(findSimpleNumber(['cg', 'cg', 'fdcagb', 'cbg'], 1)).toEqual(['cg', 'cg']);
      expect(findSimpleNumber(['gecf', 'egdcabf', 'bgf', 'bfgea'], 4)).toEqual(['gecf']);
      expect(findSimpleNumber(['cg', 'cg', 'fdcagb', 'cbg'], 7)).toEqual(['cbg']);
      expect(findSimpleNumber(['gbdfcae', 'bgc', 'cg', 'cgb'], 8)).toEqual(['gbdfcae']);
    });
  });

  describe('findNumbers', () => {
    it('should decode inputs into correct numbers', () => {
      expect(
        findNumbers(['acedgfb', 'cdfbe', 'gcdfa', 'fbcad', 'dab', 'cefabd', 'cdfgeb', 'eafb', 'cagedb', 'ab'])
      ).toEqual({
        'acedgfb': 8,
        'cdfbe': 5,
        'gcdfa': 2,
        'fbcad': 3,
        'dab': 7,
        'cefabd': 9,
        'cdfgeb': 6,
        'eafb': 4,
        'cagedb': 0,
        'ab': 1,
      });
    });
  });

  describe('decodeOutput', () => {
    it('should decode output given patterns', () => {
      expect(
        decodeOutput([
          ['acedgfb', 'cdfbe', 'gcdfa', 'fbcad', 'dab', 'cefabd', 'cdfgeb', 'eafb', 'cagedb', 'ab'],
          ['cdfeb', 'fcadb', 'cdfeb', 'cdbaf'],
        ])
      ).toEqual(5353)
    });
  });
});