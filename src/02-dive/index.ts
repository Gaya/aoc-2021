import input from './input';

import { determinePosition, determinePositionWithAim } from './determinePosition';

export default function solve() {
  const inputs = input.split(/\n/).map((l) => l.trim()).filter((l) => l !== '');

  const solution1 = determinePosition(inputs);

  console.log('Day 2 - Part 1: ', solution1.x * solution1.y);

  const solution2 = determinePositionWithAim(inputs);

  console.log('Day 2 - Part 2: ', solution2.x * solution2.y);
}
