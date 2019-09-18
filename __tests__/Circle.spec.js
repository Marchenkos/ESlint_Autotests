import { Circle } from "../src/classes";

const { describe, test, expect } = global;

describe("Method for calculating area from a circle class", () => {
    test("it should return the area of the circle, for which the radius is number", () => {
        const radius = 10;
        const expectedOutput = 314;

        const shape = new Circle(radius);

        expect(shape.calculateArea()).toEqual(expectedOutput);
    });

    test("it should return zero", () => {
        const radius = null;
        const expectedOutput = 0;

        const shape = new Circle(radius);

        expect(shape.calculateArea()).toEqual(expectedOutput);
    });

    test("it should return not a number", () => {
        let radius;
        const expectedOutput = NaN;

        const shape = new Circle(radius);

        expect(shape.calculateArea()).toEqual(expectedOutput);
    });
});
