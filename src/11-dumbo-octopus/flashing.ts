export function toGrid(input: string): number[][] {
  return input.split('\n').map((l) => l.split('').map((n) => parseInt(n, 10)));
}

function flashPositions(grid: number[][]): number[][] {
  return grid.reduce((acc, row, y) => {
    return row.reduce((acc2, n, x) => {
      if (n === 9) {
        // increase all adjacent positions and self
        const newGrid = [...acc2];

        const hasTop = y > 0;
        const hasBottom = y < grid.length - 1;
        const hasLeft = x > 0;
        const hasRight = x < row.length - 1;

        // top left
        if (hasLeft && hasTop && newGrid[y - 1][x - 1] !== 9) {
          newGrid[y - 1][x - 1] += 1;
        }

        // top
        if (hasTop && newGrid[y - 1][x] !== 9) {
          newGrid[y - 1][x] += 1;
        }

        // top right
        if (hasTop && hasRight && newGrid[y - 1][x + 1] !== 9) {
          newGrid[y - 1][x + 1] += 1;
        }

        // left
        if (hasLeft && newGrid[y][x - 1] !== 9) {
          newGrid[y][x - 1] += 1;
        }

        // self
        newGrid[y][x] += 1;

        // right
        if (hasRight && newGrid[y][x + 1] !== 9) {
          newGrid[y][x + 1] += 1;
        }

        // bottom left
        if (hasBottom && hasLeft && newGrid[y + 1][x - 1] !== 9) {
          newGrid[y + 1][x - 1] += 1;
        }

        // bottom
        if (hasBottom && newGrid[y + 1][x] !== 9) {
          newGrid[y + 1][x] += 1;
        }

        // bottom right
        if (hasBottom && hasRight && newGrid[y + 1][x + 1] !== 9) {
          newGrid[y + 1][x + 1] += 1;
        }

        return flashPositions(acc2);
      }

      return acc2;
    }, acc);
  }, grid);
}

export function nextStep(grid: number[][]): number[][] {
  // find 9's and increase adjacent and self by 1, repeat until out of 9's
  const flashed = flashPositions(grid);

  return flashed.reduce((acc, row, y) => {
    return row.reduce((acc2, n, x) => {
      const nextGrid = [...acc2];

      nextGrid[y][x] = n > 9 ? 0 : n + 1;

      return nextGrid;
    }, acc);
  }, flashed);
}

export function countFlashes(input: string, rounds: number): number {
  let grid = toGrid(input);

  let flashes = 0;

  for (let i = 0; i < rounds; i++) {
    grid = nextStep(grid);

    flashes = grid.reduce((acc, row) => {
      return row.reduce((acc2, n) => {
        return n === 0 ? acc2 + 1 : acc2;
      }, acc);
    }, flashes);
  }

  return flashes;
}