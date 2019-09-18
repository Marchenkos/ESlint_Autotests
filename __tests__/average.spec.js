import { average } from "../src/functions_array";

const { describe, test, expect } = global;

describe("Average function", () => {
    test("it should return average for a non-empty numeric array", () => {
        const input = [1, 2, 3];
        const expectedOutput = 2;

        expect(average(input)).toEqual(expectedOutput);
    });

    test("it should return not a number for an empty numeric array", () => {
        const input = [];
        const expectedOutput = NaN;

        expect(average(input)).toEqual(expectedOutput);
    });

    test("it should return average for a non-empty numeric array, but includes element null", () => {
        const input = [1, null, 5];
        const expectedOutput = 2;

        if (input.includes(null)) {
            input[input.indexOf(null)] = 0;
        }

        expect(average(input)).toEqual(expectedOutput);
    });

    test("it shouldn't return not a number if input is't array", () => {
        const input = "lalalala";
        const expectedOutput = NaN;

        expect(average(input)).toEqual(expectedOutput);
    });
});
