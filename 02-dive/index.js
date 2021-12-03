const { readFileSplitLines } = require('../00-helpers/helpers');

const { determinePosition } = require('./determinePosition');

const inputs = readFileSplitLines('./input').map((l) => l.trim()).filter((l) => l !== '');

const { x, y } = determinePosition(inputs);

console.log(x * y);