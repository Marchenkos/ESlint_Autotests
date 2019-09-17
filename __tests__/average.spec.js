const {average} = require('../js_lib');

describe("Average function", () => {
  test("it should return average for array", () => {
    const input = [2, 2, 8];
    const output = 4;
    expect(average(input)).toEqual(output);
  });
});