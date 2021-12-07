export type Line = [[number, number], [number, number]];

export function parseInput(input: string): [[number, number], [number, number]] {
  const matches = input.match(/^(\d+),(\d+) -> (\d+),(\d+)$/);

  if (!matches || matches.length !== 5) {
    throw new Error(`Invalid input: ${input}`);
  }

  const [, x1, y1, x2, y2] = matches;

  const coords = [x1, y1, x2, y2]
    .map((p) => parseInt(p.trim(), 10));

  return [[coords[0], coords[1]], [coords[2], coords[3]]];
}

function horizontalAndVerticalLines(inputs: string[]): Line[] {
  return inputs
    .map(parseInput)
    // x1 === x2 && y1 === y2
    .filter((line) => line[0][0] === line[1][0] || line[0][1] === line[1][1]);
}

export function linesToCoords(lines: Line[]): string[] {
  return lines
    .map((line) => {
      const [start, end] = line;
      const p: [number, number][] = [];

      const xDistance = start[0] - end[0];
      const yDistance = start[1] - end[1];

      for (let x = 0; x <= Math.abs(xDistance); x += 1) {
        for (let y = 0; y <= Math.abs(yDistance); y += 1) {
          const xp = xDistance >= 0 ? start[0] - x : start[0] + x;
          const yp = yDistance >= 0 ? start[1] - y : start[1] + y;

          p.push([xp, yp]);
        }
      }

      return p;
    })
    .reduce((acc, points) => [...acc, ...points], [])
    .map((p) => p.join(','));
}

export function overlappingPoints(inputs: string[]): number {
  const lines = horizontalAndVerticalLines(inputs);
  const coords = linesToCoords(lines);

  const set = new Set(coords);

  const duplicates = coords.filter((item) => {
    if (set.has(item)) {
      set.delete(item);

      return false;
    }

    return true;
  });



  return new Set(duplicates).size;
}