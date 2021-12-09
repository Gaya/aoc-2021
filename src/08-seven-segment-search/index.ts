import input from './input';
import { decodeOutput, findSimpleNumber, parseInput } from './findNumber';

export default function solve() {
  const lines = input.split('\n').map(parseInput);
  const outputs = lines.map(([, o]) => o);

  const part1 = outputs
    .map((o) => {
      return [
        ...findSimpleNumber(o, 1),
        ...findSimpleNumber(o, 4),
        ...findSimpleNumber(o, 7),
        ...findSimpleNumber(o, 8),
      ].length;
    })
    .reduce((a, b) => a + b);

  console.log('Day 8 - Part 1: ', part1);

  const part2 = lines
    .map(([patterns, outputs]) => decodeOutput([patterns, outputs]))
    .reduce((a, b) => a + b);

  console.log('Day 8 - Part 2: ', part2);
}