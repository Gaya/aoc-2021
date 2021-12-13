import input from './input';
import { countFlashes, findAllFlashing } from './flashing';

export default function solve() {
  console.log('Day 11 - Part 1: ', countFlashes(input, 100));
  console.log('Day 11 - Part 2: ', findAllFlashing(input));
}