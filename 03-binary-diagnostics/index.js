const { readFileSplitLines } = require('../00-helpers/helpers');
const { gammaRate, epsilonRate, oxygenGeneratorRate, co2ScrubberRate } = require('./calculateRates');

const binaryList = readFileSplitLines('./input');

const gamma = gammaRate(binaryList);
const epsilon = epsilonRate(binaryList);

console.log('part 1: ', gamma * epsilon);

const oxygen = oxygenGeneratorRate(binaryList);
const co2 = co2ScrubberRate(binaryList);

console.log('part 2: ', oxygen * co2);