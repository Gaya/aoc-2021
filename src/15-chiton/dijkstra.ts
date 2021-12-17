import Graph from 'node-dijkstra';

function toCoord(x: number, y: number): string {
  return [x, y].join(',');
}

export function createGraph(weights: number[][]): Graph {
  const route = new Graph();

  weights.forEach((row, y) => {
    row.forEach((value, x) => {
      const weight: Record<string, number> = {};

      if (y > 0) {
        weight[toCoord(x, y - 1)] = weights[y - 1][x];
      }

      if (x > 0) {
        weight[toCoord(x - 1, y)] = weights[y][x - 1];
      }

      if (y < weights.length - 1) {
        weight[toCoord(x, y + 1)] = weights[y + 1][x];
      }

      if (x < row.length - 1) {
        weight[toCoord(x + 1, y)] = weights[y][x + 1];
      }

      route.addNode(toCoord(x, y), weight);
    });
  });

  return route;
}

export function findShortestPath(weights: number[][]): { path: string[], cost: number } {
  const route = createGraph(weights);

  return route.path(toCoord(0, 0), toCoord(weights.length - 1, weights[0].length - 1), { cost: true });
}