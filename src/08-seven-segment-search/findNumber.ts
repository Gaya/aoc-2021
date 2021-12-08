type SimpleNumber = 1 | 4 | 7 | 8;

export function parseInput(input: string): [string[], string[]] {
  const [patterns, outputs] = input.split(' | ').map((part: string): string[] => part.split(' '));

  return [patterns, outputs];
}

function numberLength(input: number) {
  switch (input) {
    case 1:
      return 2;
    case 7:
      return 3;
    case 4:
      return 4;
    case 2:
    case 3:
    case 5:
      return 5;
    case 0:
    case 6:
    case 9:
      return 6;
    case 8:
      return 7;
    default:
      return 0;
  }
}

export function findSimpleNumber(input: string[], find: SimpleNumber) {
  const stringLength = numberLength(find);
  return input.filter((s) => s.length === stringLength);
}

export function findNumbers(patterns: string[]): { [pattern: string]: number } {
  const [one] = findSimpleNumber(patterns, 1);
  const [four] = findSimpleNumber(patterns, 4);
  const [seven] = findSimpleNumber(patterns, 7);
  const [eight] = findSimpleNumber(patterns, 8);

  const cf = one;
  const [a] = seven.split('').filter((l) => !one.split('').includes(l));
  const bd = four.split('').filter((l) => !one.split('').includes(l)).join('');
  const eg = eight.split('').filter((l) => ![...four.split(''), a].includes(l)).join('');

  // we can determine number 6
  const [six] = patterns.filter((pattern) => {
    if (pattern.length !== numberLength(6)) {
      return false;
    }

    // pattern is 0, 6, or 9. Only 6 doesn't have both c and f
    return !cf.split('').every((l) => pattern.split('').includes(l));
  });

  // we can determine number 9
  const [nine] = patterns.filter((pattern) => {
    if (pattern.length !== numberLength(9)) {
      return false;
    }

    // pattern is 0, 6, or 9. Only 9 doesn't have both e and g
    return !eg.split('').every((l) => pattern.split('').includes(l));
  });

  // zero is the other one with length 6
  const [zero] = patterns.filter((pattern) => {
    if (pattern.length !== numberLength(0)) {
      return false;
    }

    return pattern !== six && pattern !== nine;
  });

  // now can determine positions c, d, f, g and e
  const [d] = eight.split('').filter((l) => !zero.split('').includes(l)).join('');
  const c = cf.split('').filter((l) => !six.split('').includes(l)).join('');
  const f = cf.split('').filter((l) => l !== c).join('');
  const e = eg.split('').filter((l) => !nine.split('').includes(l)).join('');
  const g = eg.split('').filter((l) => l !== e).join('');

  const [two] = patterns.filter(
    (pattern) => pattern.length === numberLength(2) && [a, c, d, e, g].every((l) => pattern.split('').includes(l)),
  );
  const [three] = patterns.filter(
    (pattern) => pattern.length === numberLength(3) && [a, c, d, f, g].every((l) => pattern.split('').includes(l)),
  );
  const [five] = patterns.filter(
    (pattern) => pattern.length === numberLength(5) && pattern !== two && pattern !== three,
  );

  return {
    [zero]: 0,
    [one]: 1,
    [two]: 2,
    [three]: 3,
    [four]: 4,
    [five]: 5,
    [six]: 6,
    [seven]: 7,
    [eight]: 8,
    [nine]: 9,
  };
}

export function isAnagram(a: string, b: string) {
  const sa = [...a].sort();
  const sb = [...b].sort();

  return sa.join('') === sb.join('');
}

export function decodeOutput([patterns, output]: [string[], string[]]): number {
  const numbers = findNumbers(patterns);

  const mappedNumbers = output.map((key) => {
    const numberKey = Object.keys(numbers).find((k) => isAnagram(key, k)) || 0;
    return numbers[numberKey];
  });

  return parseInt(mappedNumbers.join(''), 10);
}