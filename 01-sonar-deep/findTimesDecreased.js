function findTimesDecreased(numbers) {
  return numbers.reduce((count, item, index, allNumbers) => {
    // first item will always return false as `number > undefined === false`
    if (item > allNumbers[index - 1]) {
      return count + 1;
    }

    return count;
  }, 0);
}

module.exports = findTimesDecreased;