function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

function findTimesIncreased(numbers, window = 1) {
  return numbers.reduce((count, item, index, allNumbers) => {
    if (
      // start when there are enough numbers to compare
      index - window >= 0
      // compare windows A < B
      && sum(allNumbers.slice(index - window, index)) < sum(allNumbers.slice(index + 1 - window, index + 1))
    ) {
      return count + 1;
    }

    return count;
  }, 0);
}

module.exports = findTimesIncreased;