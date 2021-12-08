import input from './input';
import { countFish, cycleDays, listToLedger } from './lifeCycle';

const fishes = listToLedger(input.split(',').map((i) => parseInt(i, 10)));

const part1 = countFish(cycleDays(fishes, 80));

console.log('Day 6 - Part 1: ', part1);

const part2 = countFish(cycleDays(fishes, 256));

console.log('Day 6 - Part 2: ', part2);
