import { folding } from '../src/functions_array'

describe("Folding function", () => {
    test("it should call a callback for each element of the non-empty numeric array and change it", () => {
        let input = [2, 2, 8];
        const callback = (a, b) =>  a + b ;
        let expectedOutput = 12;

        expect(folding(input, callback, 0)).toEqual(expectedOutput);
    });

    test("it should call a callback for each element of the empty array", () => {
        let input = [];
        const callback = (a, b) =>  a + b ;
        let expectedOutput = 0;

        expect(folding(input, callback, 0)).toEqual(expectedOutput);
    });
});