import { readFileSplitLines } from '../00-helpers/helpers';

import findTimesIncreased from './findTimesIncreased';

const numbers = readFileSplitLines(__dirname + '/../../input/01').map((i: string) => parseInt(i, 10));

console.log('Day 1 - Part 1: ', findTimesIncreased(numbers));
console.log('Day 1 - Part 2: ', findTimesIncreased(numbers, 3));