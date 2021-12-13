import input from './input';
import { autocompleteSyntax, corruptionErrorScore, findCorrupted, middleScore } from './checkSyntax';

export default function solve() {
  const corruptedLines = findCorrupted(input);

  console.log('Day 10 - Part 1: ', corruptionErrorScore(corruptedLines));

  const autocompletions = autocompleteSyntax(input);

  console.log('Day 10 - Part 2: ', middleScore(autocompletions));
}