import input from './input';

import { overlappingPoints } from './linePoints';

export default function solve() {
  const coordinates = input.split(/\n/);

  const part1 = overlappingPoints(coordinates, true);

  console.log('Day 5 - Part 1: ', part1);

  const part2 = overlappingPoints(coordinates, false);

  console.log('Day 5 - Part 2: ', part2);
}