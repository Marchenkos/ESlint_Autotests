import { ShapesStore, Rectangle, Square } from "../src/classes";

const { describe, test, expect } = global;

describe("Method for calculating a common area of shapes", () => {
    test("it should return a common area of the squares", () => {
        const shape = new Square(8);
        const shape2 = new Square(6);
        const shape3 = new Square(5);
        const shape4 = new Rectangle(2, 8);
        const shape5 = new Rectangle(5, 10);

        const expectedOutput = 191;

        const shapesStore = new ShapesStore([shape, shape2, shape3, shape5, shape4]);

        expect(shapesStore.calculateArea()).toEqual(expectedOutput);
    });
    test("it should return zero", () => {
        const expectedOutput = 0;

        const shapesStore = new ShapesStore([]);

        expect(shapesStore.calculateArea()).toEqual(expectedOutput);
    });
});
