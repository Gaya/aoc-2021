export function getWeights(input: string): number[][] {
  return input.split('\n').map(line => line.split('').map((i) => parseInt(i, 10)));
}

export function expandMap(weights: number[][], factor = 1): number[][] {
  const ogRows = weights.length;
  const ogCols = weights[0].length;
  const rows = ogRows * factor;
  const cols = ogCols * factor;

  const expanded: number[][] = [];

  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      if (!expanded[y]) {
        expanded[y] = [];
      }

      expanded[y][x] = (weights[y % ogRows][x % ogCols] + Math.floor(y / ogRows) + Math.floor(x / ogCols)) % 9;

      expanded[y][x] = expanded[y][x] === 0 ? 9 : expanded[y][x];
    }
  }

  return expanded;
}