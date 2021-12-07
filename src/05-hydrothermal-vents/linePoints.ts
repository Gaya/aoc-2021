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

function parseLines(inputs: string[], simpleLines = false): Line[] {
  const lines = inputs
    .map(parseInput);

  if (simpleLines) {
    // only horizontal or vertical lines
    return lines.filter((line) => line[0][0] === line[1][0] || line[0][1] === line[1][1]);
  }

  return lines;
}

export function linesToCoords(lines: Line[]): string[] {
  return lines
    .map((line) => {
      const [start, end] = line;
      const p: [number, number][] = [];

      const xDistance = end[0] - start[0];
      const yDistance = end[1] - start[1];


      for (let steps = 0; steps <= Math.max(Math.abs(xDistance), Math.abs(yDistance)); steps++) {
        let xMoved = 0;
        let yMoved = 0;

        if (xDistance !== 0) {
          xMoved = steps * (xDistance / Math.abs(xDistance));
        }

        if (yDistance !== 0) {
          yMoved = steps * (yDistance / Math.abs(yDistance));
        }

        p.push([start[0] + xMoved, start[1] + yMoved]);
      }

      return p;
    })
    .reduce((acc, points) => [...acc, ...points], [])
    .map((p) => p.join(','));
}

export function overlappingPoints(inputs: string[], simpleLines = false): number {
  const lines = parseLines(inputs, simpleLines);
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