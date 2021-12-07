import input from './input';

import { overlappingPoints } from './linePoints';

const coordinates = input.split(/\n/);

const part1 = overlappingPoints(coordinates);

console.log('Day 5 - Part 1: ', part1);

