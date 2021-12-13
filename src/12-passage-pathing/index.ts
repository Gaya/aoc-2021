import input from './input';

import { numberOfPaths } from './findPaths';

export default function solve() {
  console.log('Day 12 - Part 1: ', numberOfPaths(input));
  console.log('Day 12 - Part 2: ', numberOfPaths(input, true));
}