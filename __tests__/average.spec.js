import { average } from '../src/functions_array'

describe("Average function", () => {
    test("it should return average for a non-empty numeric array", () => {
        let input = [1, 2, 3];
        let expectedOutput = 2;

        expect(average(input)).toEqual(expectedOutput);
    });

    test("it should return average for an empty numeric array", () => {
        let input = [];
        let expectedOutput = NaN;

        expect(average(input)).toEqual(expectedOutput);
    });

    test("it should return average for a non-empty numeric array, but includes element null", () => {
        let input = [1, null, 5];
        let expectedOutput = 2;
        
        if(input.includes(null)) {
            input[input.indexOf(null)] = 0;
        }

        expect(average(input)).toEqual(expectedOutput);
    });

    test("it shouldn't return average if input is't array", () => {
        let input = "lalalala";
        let expectedOutput = NaN;

        expect(average(input)).toEqual(expectedOutput);
    });
});