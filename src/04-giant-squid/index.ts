import input from './input';

import { winningBoard, lastWinningBoard } from './bingo';
import { getBoards, getSequence } from './parseInput';

export default function solve() {
  const boards = getBoards(input);
  const sequence = getSequence(input);

  const part1 = winningBoard(boards, sequence);

  if (part1) {
    console.info('Day 4 - Part 1: ', part1[1] * part1[2]);
  }

  const part2 = lastWinningBoard(boards, sequence);

  if (part2) {
    console.info('Day 4 - Part 2: ', part2[1] * part2[2]);
  }
}