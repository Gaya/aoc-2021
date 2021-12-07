import input from './input';

import findTimesIncreased from './findTimesIncreased';

const numbers = input.split(/\n/).map((i: string) => parseInt(i, 10));

console.log('Day 1 - Part 1: ', findTimesIncreased(numbers));
console.log('Day 1 - Part 2: ', findTimesIncreased(numbers, 3));