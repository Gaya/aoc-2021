function mostCommonBit(bits) {
  return bits.filter((bit) => bit === '1').length >= (bits.length / 2) ? '1' : '0';
}

function calculateBasicRating(binaryList, type = 'gamma') {
  const brokenBits = binaryList
    .reduce((acc, binary) => {
      return binary.split('').reduce((totals, bit, index) => {
        totals[index] = totals[index] ? [...totals[index], bit] : [bit];
        return totals;
      }, acc);
    }, []);

  const winningBits = brokenBits.map(mostCommonBit);

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
  return calculateBasicRating(binaryList, 'gamma');
}

function epsilonRate(binaryList) {
  return calculateBasicRating(binaryList, 'epsilon');
}

function calculateConditionalRating(binaryList, type = 'oxygen', currentIndex = 0) {
  if (binaryList.length === 1) {
    return parseInt(binaryList[0], 2);
  }

  const bitsToCheck = binaryList.map((binary) => binary.slice(currentIndex, currentIndex + 1));
  const winner = mostCommonBit(bitsToCheck);

  const remaining = binaryList.filter((binary) => {
    const bitAtIndex = binary.slice(currentIndex, currentIndex + 1);

    if (type === 'co2') {
      return bitAtIndex !== winner;
    }

    return bitAtIndex === winner;
  });

  return calculateConditionalRating(remaining, type, currentIndex + 1);
}

function oxygenGeneratorRate(binaryList) {
  return calculateConditionalRating(binaryList, 'oxygen');
}

function co2ScrubberRate(binaryList) {
  return calculateConditionalRating(binaryList, 'co2');
}

module.exports = {
  gammaRate,
  epsilonRate,
  oxygenGeneratorRate,
  co2ScrubberRate,
};
