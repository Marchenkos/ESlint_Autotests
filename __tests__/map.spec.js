import { map } from "../src/functions_array";

const { describe, test, expect } = global;

describe("Mapping function", () => {
    test("it should return a new array from a non-empty numeric array whose elements transformed", () => {
        const input = [11, 2, 30, 1, 8];
        const callback = (a) => a + 10;
        const expectedOutput = [21, 12, 40, 11, 18];

        expect(map(input, callback)).toEqual(expectedOutput);
    });

    test("it should return a new array from a non-empty string", () => {
        const input = "hello";
        const callback = (a) => a + 1;
        const expectedOutput = ["h1", "e1", "l1", "l1", "o1"];

        expect(map(input, callback)).toEqual(expectedOutput);
    });

    test("it should return a new array from a non-empty numeric array with null elements", () => {
        const input = [15, null, 5];
        const expectedOutput = [25, 10, 15];
        const callback = (a) => a + 10;

        if (input.includes(null)) {
            input[input.indexOf(null)] = 0;
        }

        expect(map(input, callback)).toEqual(expectedOutput);
    });

    test("it shouldn return an empty array", () => {
        const input = [];
        const callback = (a) => a + 10;
        const expectedOutput = [];

        expect(map(input, callback)).toEqual(expectedOutput);
    });
});
