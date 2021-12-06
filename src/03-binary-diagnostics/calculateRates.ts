function mostCommonBit(bits: string[]) {
  return bits.filter((bit) => bit === '1').length >= (bits.length / 2) ? '1' : '0';
}

function calculateBasicRating(binaryList: string[], type = 'gamma') {
  const brokenBits = binaryList
    .reduce((acc: string[][], binary) => {
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

export function gammaRate(binaryList: string[]) {
  return calculateBasicRating(binaryList, 'gamma');
}

export function epsilonRate(binaryList: string[]) {
  return calculateBasicRating(binaryList, 'epsilon');
}

function calculateConditionalRating(binaryList: string[], type = 'oxygen', currentIndex = 0): number {
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

export function oxygenGeneratorRate(binaryList: string[]) {
  return calculateConditionalRating(binaryList, 'oxygen');
}

export function co2ScrubberRate(binaryList: string[]) {
  return calculateConditionalRating(binaryList, 'co2');
}
