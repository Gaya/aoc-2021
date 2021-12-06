const { readFileSplitLines } = require('../00-helpers/helpers');
const { gammaRate, epsilonRate } = require('./calculateRates');

const binaryList = readFileSplitLines('./input');

const gamma = gammaRate(binaryList);
const epsilon = epsilonRate(binaryList);

console.log('part 1: ', gamma * epsilon);