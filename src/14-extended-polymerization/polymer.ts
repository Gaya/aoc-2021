export function stepPolymer(template: string, insertionPairs: [string, string][]): string {
  const pairs = insertionPairs.map(([left]) => left).join('|');
  const pairRegistry: Record<string, string> = insertionPairs.reduce((acc, [left, right]) => ({ ...acc, [left]: right }), {});

  const test = new RegExp(`(?=(${pairs}))`, 'g');

  const results = [...template.matchAll(test)];

  const outcome = results.reduce((t, match, matchIndex) => {
    const { index } = match;
    const sliceIndex = (index || 0) + matchIndex + 1;
    const found = match[1];
    const insertion = pairRegistry[found];

    return `${t.slice(0, sliceIndex)}${insertion}${t.slice(sliceIndex)}`;
  }, template);

  return outcome;
}

export function countPolymers(input: string): Record<string, number> {
  return input.split('').reduce((acc: Record<string, number>, letter) => {
    return {
      ...acc,
      [letter]: acc[letter] ? acc[letter] + 1: 1,
    };
  }, {});
}

export function leastAvailablePolymer(input: string): { letter: string; count: number; } {
  const counts = countPolymers(input);

  return Object.entries(counts).reduce((acc, [letter, count]) => {
    if (count < acc.count) {
      return { letter, count };
    }

    return acc;
  }, { letter: '', count: Infinity });
}

export function mostAvailablePolymer(input: string): { letter: string; count: number; } {
  const counts = countPolymers(input);

  return Object.entries(counts).reduce((acc, [letter, count]) => {
    if (count > acc.count) {
      return { letter, count };
    }

    return acc;
  }, { letter: '', count: 0 });
}