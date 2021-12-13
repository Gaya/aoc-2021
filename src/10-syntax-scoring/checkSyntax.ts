const score = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
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

function removeRootCouples(input: string): string {
  const test = /\(\)|\[]|<>|{}/g;

  const outcome = input.replace(test, '');

  if (outcome === input) {
    return outcome;
  }

  return removeRootCouples(outcome);
}

export function findCorrupted(input: string): CorruptionResult[] {
  const lines = input.split('\n');

  const unrooted = lines.map((line) => {
    return removeRootCouples(line);
  });

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

function findScore(closingBracket: string): number {
  return score[closingBracket as ClosingBracket] || 0;
}

export function errorScore(results: CorruptionResult[]): number {
  return results.reduce((acc, { found }) => {
    return acc + findScore(found);
  }, 0);
}

export function checkSyntax(input: string): CorruptionResult[] {
  return [];
}