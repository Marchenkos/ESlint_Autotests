const {Square} = require('../js_lib');

describe("Circle area function", () => {
    test("it should return average for array", () => {
        const side = 6;
        const shape = new Square(side);
        const output = 36;
      expect(shape.calculateArea()).toEqual(output);
    });
});