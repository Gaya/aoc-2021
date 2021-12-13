import { autocompleteSyntax, corruptionErrorScore, findCorrupted, middleScore, scoreAutocomplete } from './checkSyntax';

describe('checkSyntax', () => {
  const input = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;

  describe('findCorrupted', () => {
    it('should parse and check the syntax for corrupted lines', () => {
      expect(findCorrupted('{([(<{}[<>[]}>{[]{[(<()>')).toEqual([{ line: 1, expected: ']', found: '}' }]);
      expect(findCorrupted('[[<[([]))<([[{}[[()]]]')).toEqual([{ line: 1, expected: ']', found: ')' }]);
      expect(findCorrupted('[{[{({}]{}}([{[{{{}}([]')).toEqual([{ line: 1, expected: ')', found: ']' }]);
      expect(findCorrupted('[<(<(<(<{}))><([]([]()')).toEqual([{ line: 1, expected: '>', found: ')' }]);
      expect(findCorrupted('<{([([[(<>()){}]>(<<{{')).toEqual([{ line: 1, expected: ']', found: '>' }]);
    });

    it('should parse multiple lines at once', () => {
      expect(findCorrupted(input)).toEqual([
        { line: 3, expected: ']', found: '}' },
        { line: 5, expected: ']', found: ')' },
        { line: 6, expected: ')', found: ']' },
        { line: 8, expected: '>', found: ')' },
        { line: 9, expected: ']', found: '>' },
      ]);
    });
  });

  describe('corruptionErrorScore', () => {
    it('should sum up all corruption errors into a score', () => {
      expect(corruptionErrorScore([
        { line: 3, expected: ']', found: '}' },
        { line: 5, expected: ']', found: ')' },
        { line: 6, expected: ')', found: ']' },
        { line: 8, expected: '>', found: ')' },
        { line: 9, expected: ']', found: '>' },
      ])).toEqual(26397);
    });
  });

  describe('autocompleteSyntax', () => {
    it('should autocomplete the syntax', () => {
      expect(autocompleteSyntax('[({(<(())[]>[[{[]{<()<>>')).toEqual(['}}]])})]']);
      expect(autocompleteSyntax('[(()[<>])]({[<{<<[]>>(')).toEqual([')}>]})']);
      expect(autocompleteSyntax('(((({<>}<{<{<>}{[]{[]{}')).toEqual(['}}>}>))))']);
      expect(autocompleteSyntax('{<[[]]>}<{[{[{[]{()[[[]')).toEqual([']]}}]}]}>']);
      expect(autocompleteSyntax('<{([{{}}[<[[[<>{}]]]>[]]')).toEqual(['])}>']);
    });

    it('should autocomplete the syntax of large inputs', () => {
      expect(autocompleteSyntax(input)).toEqual([
        '}}]])})]',
        ')}>]})',
        '}}>}>))))',
        ']]}}]}]}>',
        '])}>',
      ]);
    });
  });

  describe('autocompleteScore', () => {
    it('should determine autocomplete score of a result', () => {
      expect(scoreAutocomplete('}}]])})]')).toEqual(288957);
      expect(scoreAutocomplete(')}>]})')).toEqual(5566);
      expect(scoreAutocomplete('}}>}>))))')).toEqual(1480781);
      expect(scoreAutocomplete(']]}}]}]}>')).toEqual(995444);
      expect(scoreAutocomplete('])}>')).toEqual(294);
    });
  });

  describe('middleScore', () => {
    it('should determine middle score of a result', () => {
      expect(middleScore([
        '}}]])})]',
        ')}>]})',
        '}}>}>))))',
        ']]}}]}]}>',
        '])}>',
      ])).toEqual(288957);
    });
  });
});