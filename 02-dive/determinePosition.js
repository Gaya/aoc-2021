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

function determinePosition(inputs, aim = false) {
  const { x, y } = inputs.reduce((acc, input) => {
    const change = parseInput(input);

    if (!aim) {
      return {
        ...acc,
        x: acc.x + (change.x || 0),
        y: acc.y + (change.y || 0),
      };
    }

    const a = acc.a + (change.y || 0);

    return {
      x: acc.x + (change.x || 0),
      y: acc.y + (change.x > 0 ? a * change.x : 0),
      a,
    };
  }, { x: 0, y: 0, a: 0 });

  return { x, y };
}

function determinePositionWithAim(inputs) {
  return determinePosition(inputs, true);
}

module.exports = {
  parseInput,
  determinePosition,
  determinePositionWithAim,
};