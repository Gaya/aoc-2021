export function fuelToPosition(positions: number[], destination: number, trueUsage = false): number {
  let totalUsage = 0;

  for (let i = 0; i < positions.length; i += 1) {
    const position = positions[i];

    const distance = Math.abs(position - destination);

    totalUsage += trueUsage ? (distance * (distance + 1)) / 2 : distance;
  }

  return totalUsage;
}

export function leastFuel(positions: number[], trueUsage = false): number {
  const minPos = Math.min(...positions);
  const maxPos = Math.max(...positions);

  let lowestCost: number | undefined;

  for (let pos = minPos; pos <= maxPos; pos += 1) {
    const cost = fuelToPosition(positions, pos, trueUsage);

    if (typeof lowestCost === 'undefined' || cost < lowestCost) {
      lowestCost = cost;
    }
  }

  return lowestCost || 0;
}