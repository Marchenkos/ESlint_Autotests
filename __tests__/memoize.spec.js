import { memoize } from "../src/functional_programming";

const { describe, test, expect } = global;

describe("Memoized function", () => {
    test("it should return the same result as a action in agrument", () => {
        function input(data) {
            const newArray = [];

            for (let i = 0; i < data.length; i++) {
                if (data[i] > 3) {
                    newArray.push(data[i]);
                }
            }

            return newArray;
        }

        const expectedOutput = [4];

        expect(memoize(input)([1, 2, 3, 4])).toEqual(expectedOutput);
    });
});
