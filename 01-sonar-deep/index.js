const { readFileSplitLines } = require('../00-helpers/helpers');

const findTimesIncreased = require('./findTimesIncreased');

const numbers = readFileSplitLines('./input').map((i) => parseInt(i, 10));

console.log('Part 1: ', findTimesIncreased(numbers));
console.log('Part 2: ', findTimesIncreased(numbers, 3));