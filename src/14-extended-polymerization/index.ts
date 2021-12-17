import input from './input';

import { getTemplate, getPairInsertions } from './parse';
import { leastAvailablePolymer, mostAvailablePolymer, stepPolymer } from './polymer';

export default function solve() {
  const template = getTemplate(input);
  const pairs = getPairInsertions(input);

  let polymer = template;
  for (let i = 0; i < 10; i++) {
    polymer = stepPolymer(polymer, pairs);
  }

  const most = mostAvailablePolymer(polymer);
  const least = leastAvailablePolymer(polymer);

  console.log('Day 14 - Part 1: ', most.count - least.count);

  for (let i = 0; i < 30; i++) {
    polymer = stepPolymer(polymer, pairs);
  }

  const most2 = mostAvailablePolymer(polymer);
  const least2 = leastAvailablePolymer(polymer);

  console.log('Day 14 - Part 2: ', most2.count - least2.count);
}