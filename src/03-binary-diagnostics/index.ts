import { readFileSplitLines } from '../00-helpers/helpers';

import { gammaRate, epsilonRate, oxygenGeneratorRate, co2ScrubberRate } from './calculateRates';

const binaryList = readFileSplitLines(__dirname + '/../../input/03');

const gamma = gammaRate(binaryList);
const epsilon = epsilonRate(binaryList);

console.log('Day 3 - Part 1: ', gamma * epsilon);

const oxygen = oxygenGeneratorRate(binaryList);
const co2 = co2ScrubberRate(binaryList);

console.log('Day 3 - Part 2: ', oxygen * co2);