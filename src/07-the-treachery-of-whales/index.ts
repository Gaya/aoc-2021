import input from './input';
import { leastFuel } from './fuel';

export default function solve() {
  const positions = input.split(',').map((i) => parseInt(i, 10));

  const part1 = leastFuel(positions);

  console.log('Day 7 - Part 1: ', part1);

  const part2 = leastFuel(positions, true);

  console.log('Day 7 - Part 2: ', part2);
}