const findTimesDecreased = require('./findTimesDecreased');

describe('findTimesDecreased', () => {
  it('should correctly find times decreased', () => {
    expect(findTimesDecreased([0])).toEqual(0);
    expect(findTimesDecreased([0, -1])).toEqual(0);
    expect(findTimesDecreased([0, 1, 2])).toEqual(2);
    expect(findTimesDecreased([0, 1, 2, 1, 2, 1])).toEqual(3);
  });
});