const { readFileSplitLines } = require('../00-helpers/helpers');

const { determinePosition, determinePositionWithAim } = require('./determinePosition');

const inputs = readFileSplitLines('./input').map((l) => l.trim()).filter((l) => l !== '');

const solution1 = determinePosition(inputs);

console.log('part 1: ', solution1.x * solution1.y);

const solution2 = determinePositionWithAim(inputs);

console.log('part 2: ', solution2.x * solution2.y);