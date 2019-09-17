const {folding} = require('../js_lib');

describe("Folding function", () => {
    test("it should return average for array", () => {
      const array = [2, 2, 8];
      const callback = (a, b) =>  a + b ;
      const output = 12;
      expect(folding(array, callback, 0)).toEqual(output);
    });
});