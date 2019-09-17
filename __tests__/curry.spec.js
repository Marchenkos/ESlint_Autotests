import { curry, pureFunction } from '../src/functional_programming'

describe("Curry function", () => {
    test("it should call a function in argument several times", () => {
        const result = curry(pureFunction);
        
        expect(result(1)(2)(3)(4)(5)(6)).toEqual(pureFunction(1, 2, 3, 4, 5, 6));
    });
});