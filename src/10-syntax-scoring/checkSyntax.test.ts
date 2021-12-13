import { checkSyntax, errorScore, findCorrupted } from './checkSyntax';

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

  describe('errorScore', () => {
    it('should sum up all corruption errors into a score', () => {
      expect(errorScore([
        { line: 3, expected: ']', found: '}' },
        { line: 5, expected: ']', found: ')' },
        { line: 6, expected: ')', found: ']' },
        { line: 8, expected: '>', found: ')' },
        { line: 9, expected: ']', found: '>' },
      ])).toEqual(26397);
    });
  });
});