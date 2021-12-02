const findTimesIncreased = require('./findTimesIncreased');

describe('findTimesIncreased', () => {
  const assignmentExample = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

  it('should correctly find times increased', () => {
    expect(findTimesIncreased([0])).toEqual(0);
    expect(findTimesIncreased([0, -1])).toEqual(0);
    expect(findTimesIncreased([0, 1, 2])).toEqual(2);
    expect(findTimesIncreased([0, 1, 2, 1, 2, 1])).toEqual(3);

    expect(findTimesIncreased(assignmentExample)).toEqual(7);
  });

  it('should correctly find times increased in a window of 3', () => {
    expect(findTimesIncreased(assignmentExample, 3)).toEqual(5);
  });
});