function parseInput(input) {
  const matches = input.match(/^(forward|down|up) (\d+)$/);

  if (!matches) {
    return {};
  }

  const amount = parseInt(matches[2], 10);

  switch (matches[1]) {
    case 'forward':
      return {
        x: amount
      };
    case 'up':
      return {
        y: amount * -1,
      };
    case 'down':
      return {
        y: amount,
      };
    default:
      return {};
  }
}

function determinePosition(inputs) {
  return inputs.reduce((acc, input) => {
    const change = parseInput(input);

    return {
      x: acc.x + (change.x || 0),
      y: acc.y + (change.y || 0),
    };
  }, { x: 0, y: 0});
}

module.exports = {
  parseInput,
  determinePosition,
};