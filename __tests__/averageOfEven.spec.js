const {averageOfEven} = require('../js_lib');

describe("Folding function", () => {
    test("it should return average for array", () => {
      const array = [2, 3, 8, 5, 7, 4, 9];
      const output = (2 + 8 + 4) / 3;
      expect(averageOfEven(array)).toEqual(output);
    });
});