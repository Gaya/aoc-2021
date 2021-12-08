export function fuelToPosition(positions: number[], destination: number, trueUsage = false): number {
  let totalUsage = 0;

  for (let i = 0; i < positions.length; i += 1) {
    const position = positions[i];

    let usage = Math.abs(position - destination);

    if (trueUsage) {
      for (let difference = Math.abs(position - destination) - 1; difference > 0; difference -= 1) {
        usage += difference;
      }
    }

    totalUsage += usage;
  }

  return totalUsage;
}

export function leastFuel(positions: number[], trueUsage = false): number {
  const minPos = Math.min(...positions);
  const maxPos = Math.max(...positions);

  const costs: number[] = [];

  for (let pos = minPos; pos <= maxPos; pos += 1) {
    costs.push(fuelToPosition(positions, pos, trueUsage));
  }

  return Math.min(...costs);
}