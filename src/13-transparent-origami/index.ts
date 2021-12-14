import input from './input';

import { getGrid, getInstructions } from './parseInput';
import { foldGrid } from './fold';

export default function solve() {
  const grid = getGrid(input);
  const instructions = getInstructions(input);

  console.log('Day 13 - Part 1: ', foldGrid(grid, instructions[0]).length);

  const folded = instructions.reduce((g, instruction) => foldGrid(g, instruction), grid);

  console.log('Day 13 - Part 2: ');

  const maxX = Math.max(...folded.map(([x]) => x));
  const maxY = Math.max(...folded.map(([, y]) => y));

  for (let y = 0; y <= maxY; y += 1) {
    for (let x = 0; x <= maxX; x += 1) {
      const hasValue = folded.find(([x2, y2]) => x2 === x && y2 === y);

      if (hasValue) {
        process.stdout.write('█');
      } else {
        process.stdout.write(' ');
      }

    }

    process.stdout.write('\n');
  }
}