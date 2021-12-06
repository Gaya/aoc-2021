function parseBinaryList(binaryList, type = 'gamma') {
  const brokenBits = binaryList
    .reduce((acc, binary) => {
      return binary.split('').reduce((totals, bit, index) => {
        totals[index] = totals[index] ? [...totals[index], bit] : [bit];
        return totals;
      }, acc);
    }, []);

  const winningBits = brokenBits.map((bits) => {
    // more than half are 1s? Then they won
    return bits.filter((bit) => bit === '1').length >= (bits.length / 2) ? '1' : '0';
  });

  const binaryOutcome = winningBits
    .map((bit) => {
      if (type === 'epsilon') {
        return bit === '1' ? '0' : '1';
      }

      return bit;
    })
    .join('');

  return parseInt(binaryOutcome, 2);
}

function gammaRate(binaryList) {
  return parseBinaryList(binaryList, 'gamma');
}

function epsilonRate(binaryList) {
  return parseBinaryList(binaryList, 'epsilon');
}

module.exports = {
  gammaRate,
  epsilonRate,
};
