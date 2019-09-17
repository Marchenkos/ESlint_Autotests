import { averageOfEven } from '../src/functions_array'

describe("Average function", () => {
    test("it should return average of even numbers for a non-empty numeric array", () => {
        let input = [2, 3, 8, 5, 7, 4, 9]
        let expectedOutput = (2 + 8 + 4) / 3;

        expect(averageOfEven(input)).toEqual(expectedOutput);
    });

    test("it should return average of even numbers for a non-empty numeric array, but that includes element null", () => {
        let input = [2, null, 8, 5, null, 9]
        let expectedOutput = (2 + 8) / 2;

        expect(averageOfEven(input)).toEqual(expectedOutput);
    });

    test("it shouldn't return average if input is't array", () => {
        let input = 254;
        let expectedOutput = NaN;

        expect(averageOfEven(input)).toEqual(expectedOutput);
    });
});