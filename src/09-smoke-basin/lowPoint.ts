function heightsGrid(points: string): number[][] {
  return points.split(/\n/).map((row) => row.split('').map((cell) => parseInt(cell, 10)));
}

type LowPoint = [number, number, number];

function getLowPoints(heights: number[][]): LowPoint[] {
  const lowPoints: LowPoint[] = [];

  for (let y = 0; y < heights.length; y += 1) {
    for (let x = 0; x < heights[y].length; x += 1) {
      const current = heights[y][x];

      if (
        !(
          (y > 0 && current >= heights[y -1][x])
          || (x > 0 && current >= heights[y][x - 1])
          || (x + 1 < heights[y].length && current >= heights[y][x + 1])
          || (y + 1 < heights.length && current >= heights[y + 1][x])
        )
      ) {
        lowPoints.push([x, y, current]);
      }
    }
  }

  return lowPoints;
}

export function findLowPoints(points: string): LowPoint[] {
  const heights = heightsGrid(points);
  return getLowPoints(heights);
}

export function riskLevel(input: string): number {
  const lowPoints = findLowPoints(input);
  return lowPoints.length + lowPoints.reduce((a, [,,b]) => a + b, 0);
}

type Coordinate = [number, number];

function findBasin([x, y]: Coordinate, otherPoints: LowPoint[], grid: number[][], basin: Coordinate[] = [[x, y]]): [Coordinate[], LowPoint[]] {
  const points: Coordinate[] = [];
  const ceiling = 9;

  // // duplicate in basin? skip this one
  // if (basin.findIndex((p) => p[0] === x && p[1] === y) > -1) {
  //   return [basin, otherPoints];
  // }

  // can go up?
  if (y !== 0 && grid[y -1][x] !== ceiling) {
    points.push([x, y - 1]);
  }

  // can go left?
  if (x !== 0 && grid[y][x - 1] !== ceiling) {
    points.push([x - 1, y]);
  }

  // can go right?
  if (x + 1 < grid[y].length && grid[y][x + 1] !== ceiling) {
    points.push([x + 1, y]);
  }

  // can go down?
  if (y + 1 < grid.length && grid[y + 1][x] !== ceiling) {
    points.push([x, y + 1]);
  }

  // remove point from other low points (no duplicate basins allowed)
  const lowPoints = otherPoints.filter((p) => !(p[0] === x && p[1] === y));

  // mark current point as visited (e.g. can't go here anymore)
  const newGrid = [...grid];
  newGrid[y][x] = ceiling

  // reached the end
  if (points.length === 0) {
    return [basin, lowPoints];
  }

  return points.reduce(([b, op], point, index, ps) => {
    if (b.findIndex((p) => p[0] === point[0] && p[1] === point[1]) > -1) {
      return [b, op];
    }

    return findBasin(point, op, newGrid, [...b, point]);
  }, [basin, lowPoints]);
}

export function findBasinSizes(input: string): number[] {
  const grid = heightsGrid(input);
  const lowPoints = getLowPoints(grid);

  const basins = [];
  let pointsLeft = [...lowPoints];

  do {
    const firstPoint: Coordinate = [pointsLeft[0][0], pointsLeft[0][1]];
    const [basin, points] = findBasin(firstPoint, pointsLeft, grid, [firstPoint]);
    basins.push(basin);
    pointsLeft = points;
  } while (pointsLeft.length > 0);

  return basins.map((b) => b.length);
}