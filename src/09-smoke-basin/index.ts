import input from './input';

import { findBasinSizes, riskLevel } from './lowPoint';

export default function solve() {
  console.log('Day 9 - Part 1: ', riskLevel(input));

  const basins = findBasinSizes(input).sort((a, b) => a > b ? -1 : 1);
  console.log('Day 9 - Part 2: ', basins[0] * basins[1] * basins[2]);
}