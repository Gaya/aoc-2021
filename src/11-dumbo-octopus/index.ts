import input from './input';
import { countFlashes } from './flashing';

export default function solve() {
  console.log('Day 11 - Part 1: ', countFlashes(input, 100));
}