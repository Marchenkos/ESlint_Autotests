import { Square } from '../src/classes'

describe("Circle area function", () => {
    test("it should return the area of the square, for which the side is number", () => {
        let side = 6;
        let expectedOutput = 36;

        const shape = new Square(side);

        expect(shape.calculateArea()).toEqual(expectedOutput);
    });

    test("it should return the area of the square, for which the side is null", () => {
        let side = null;
        let expectedOutput = 0;

        const shape = new Square(side);

        expect(shape.calculateArea()).toEqual(expectedOutput);
    });

    test("it should return the area of the square, for which the side is underfined", () => {
        let side;
        let expectedOutput = NaN;

        const shape = new Square(side);

        expect(shape.calculateArea()).toEqual(expectedOutput);
    });
});