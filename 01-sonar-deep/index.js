const { readFileSplitLines } = require('../00-helpers/helpers');

const findTimesDecreased = require('./findTimesDecreased');

const solution = findTimesDecreased(readFileSplitLines('./input').map((i) => parseInt(i, 10)));

console.log(solution);