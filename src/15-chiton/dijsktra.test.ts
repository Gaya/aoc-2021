import { findShortestPath } from './dijkstra';

describe('Dijkstra', () => {
  const input = `1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`;

  it('should find the shortest path', () => {
    const graph = input.split('\n').map(line => line.split('').map((i) => parseInt(i, 10)));

    expect(findShortestPath(graph).cost).toEqual(40);
  });
});