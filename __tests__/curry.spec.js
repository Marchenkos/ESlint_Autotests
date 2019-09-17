const {curry, pureFunction} = require('../js_lib');

describe("Folding function", () => {
    test("it should return average for array", () => {
        const result = curry(pureFunction);
      expect(result(1)(2)(3)(4)(5)(6)).toEqual(pureFunction(1, 2, 3, 4, 5, 6));
    });
});