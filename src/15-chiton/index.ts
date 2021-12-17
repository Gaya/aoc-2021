import input from './input';
import { findShortestPath } from './dijkstra';
import { expandMap, getWeights } from './parse';

export default function solve() {
  const weights = getWeights(input);

  const solution = findShortestPath(weights);

  console.log('Day 15 - Part 1: ', solution.cost);

  const expandedMap = expandMap(weights, 5);

  console.log('Day 15 - Part 2: ', findShortestPath(expandedMap).cost);
}