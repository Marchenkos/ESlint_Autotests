import { averageOfEven } from "../src/functions_array";

const { describe, test, expect } = global;

describe("Average function", () => {
    test("it should return average of even numbers for a non-empty numeric array", () => {
        const input = [2, 3, 8, 5, 7, 4, 9];
        const expectedOutput = (2 + 8 + 4) / 3;

        expect(averageOfEven(input)).toEqual(expectedOutput);
    });

    test("it should return average of even numbers for a non-empty numeric array, but that includes element null", () => {
        const input = [2, null, 8, 5, null, 9];
        const expectedOutput = (2 + 8) / 2;

        expect(averageOfEven(input)).toEqual(expectedOutput);
    });

    test("it shouldn't return not a number if input is't array", () => {
        const input = 254;
        const expectedOutput = NaN;

        expect(averageOfEven(input)).toEqual(expectedOutput);
    });
});
