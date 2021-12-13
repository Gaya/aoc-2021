const corruptionScore = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};

const autocompleteScore = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
};

type ClosingBracket = ')' | ']' | '}' | '>';

interface CorruptionResult {
  line: number;
  expected: string;
  found: string;
}

function findClosing(input: string): string {
  switch (input) {
    case '(':
      return ')';
    case '[':
      return ']';
    case '<':
      return '>';
    case '{':
      return '}';
    default:
      throw new Error(`Wrong input '${input}'`);
  }
}

function findOpening(input: string): string {
  switch (input) {
    case ')':
      return '(';
    case ']':
      return '[';
    case '>':
      return '<';
    case '}':
      return '{';
    default:
      throw new Error(`Wrong input '${input}'`);
  }
}

function removeRootCouples(input: string): string {
  const test = /\(\)|\[]|<>|{}/g;

  const outcome = input.replace(test, '');

  if (outcome === input) {
    return outcome;
  }

  return removeRootCouples(outcome);
}

function splitAndUnroot(input: string): string[] {
  const lines = input.split('\n');

  return lines.map((line) => {
    return removeRootCouples(line);
  });
}

export function findCorrupted(input: string): CorruptionResult[] {
  const unrooted = splitAndUnroot(input);

  const illegalTest = /(\()([\]}>])|(\[)([})>])|(<)([})\]])|({)([>)\]])/gm;

  return unrooted.reduce((acc: CorruptionResult[], line, index) => {
    const illegal = line.match(illegalTest);

    if (illegal) {
      const [opening, closing] = illegal[0].split('');

      return [
        ...acc,
        {
          line: index + 1,
          expected: findClosing(opening),
          found: closing,
        },
      ];
    }

    return acc;
  }, []);
}

function findCorruptionScore(closingBracket: string): number {
  return corruptionScore[closingBracket as ClosingBracket] || 0;
}

export function corruptionErrorScore(results: CorruptionResult[]): number {
  return results.reduce((acc, { found }) => {
    return acc + findCorruptionScore(found);
  }, 0);
}

export function autocompleteSyntax(input: string): string[] {
  const unrooted = splitAndUnroot(input);

  const validOpenersOnly = /^[\[{(<]+$/gm;

  return unrooted.reduce((acc: string[], line) => {
    if (line.match(validOpenersOnly)) {
      return [
        ...acc,
        line.split('').reduceRight((closers: string[], opener) => {
          return [...closers, findClosing(opener)];
        }, []).join(''),
      ];
    }

    return acc;
  }, []);
}

function findAutocompleteScore(closingBracket: string): number {
  return autocompleteScore[closingBracket as ClosingBracket] || 0;
}

export function scoreAutocomplete(input: string): number {
  return input.split('').reduce((score, char) => {
    return (score * 5) + findAutocompleteScore(char);
  }, 0)
}

export function middleScore(input: string[]): number {
  const scores = input.map((l) => scoreAutocomplete(l));
  scores.sort((a, b) => a - b);

  return scores[Math.floor(scores.length / 2)];
}