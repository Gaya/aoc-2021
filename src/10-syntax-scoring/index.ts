import input from './input';
import { errorScore, findCorrupted } from './checkSyntax';

export default function solve() {
  const corruptedLines = findCorrupted(input);

  console.log('Day 10 - Part 1: ', errorScore(corruptedLines));
}