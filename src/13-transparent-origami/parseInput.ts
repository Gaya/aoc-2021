export type GridPoint = [number, number];
export type Grid = GridPoint[];

export function getGrid(input: string): Grid {
  const matches = [...input.matchAll(/^(\d+),(\d+)$/gm)];
  return matches.map(([, x, y]) => [parseInt(x, 10), parseInt(y, 10)]);
}

export type Instruction = ['x' | 'y', number];

export function getInstructions(input: string): Instruction[] {
  const matches = [...input.matchAll(/^fold along ([xy])=(\d+)$/gm)];
  return matches.map(([, axis, value]) => [axis as 'x' | 'y', parseInt(value, 10)]);
}