const { parseInput, determinePosition } = require('./determinePosition');

describe('determinePosition', () => {
  describe('parseInput', () => {
    it('should parse forward', () => {
      expect(parseInput('forward 1')).toEqual({ x: 1 });
      expect(parseInput('forward 66')).toEqual({ x: 66 });
    });

    it('should parse up', () => {
      expect(parseInput('up 10')).toEqual({ y: -10 });
    });

    it('should parse down', () => {
      expect(parseInput('down 10')).toEqual({ y: 10 });
    });

    it('should ignore unknown commands', () => {
      expect(parseInput('unknown 10')).toEqual({});
      expect(parseInput('443 bla 123')).toEqual({});
    });
  });

  describe('determinePosition', () => {
    it('should return the correct position after following the path', () => {
      expect(determinePosition([
        'forward 5',
        'down 5',
        'forward 8',
        'up 3',
        'down 8',
        'forward 2',
      ])).toEqual({ x: 15, y: 10 });
    });
  });
});