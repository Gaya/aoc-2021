import { readFileSplitLines } from '../00-helpers/helpers';

import { determinePosition, determinePositionWithAim } from './determinePosition';

const inputs = readFileSplitLines(__dirname + '/../../input/02').map((l) => l.trim()).filter((l) => l !== '');

const solution1 = determinePosition(inputs);

console.log('Day 2 - Part 1: ', solution1.x * solution1.y);

const solution2 = determinePositionWithAim(inputs);

console.log('Day 2 - Part 2: ', solution2.x * solution2.y);