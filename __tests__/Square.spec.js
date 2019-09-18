import { Square } from "../src/classes";

const { describe, test, expect } = global;

describe("Method for calculating area from a square class", () => {
    test("it should return the area of the square, for which the side is number", () => {
        const side = 6;
        const expectedOutput = 36;

        const shape = new Square(side);

        expect(shape.calculateArea()).toEqual(expectedOutput);
    });

    test("it should return zero", () => {
        const side = null;
        const expectedOutput = 0;

        const shape = new Square(side);

        expect(shape.calculateArea()).toEqual(expectedOutput);
    });

    test("it should return  not a number", () => {
        let side;
        const expectedOutput = NaN;

        const shape = new Square(side);

        expect(shape.calculateArea()).toEqual(expectedOutput);
    });
});
