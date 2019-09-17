import { lazy } from '../src/functional_programming'

describe("Lazy function", () => {
    test("it should return the same result as a action in agrument", () => {
        function func(data) {
            let newArray = []; 
    
            for (key of array) {
                if (array[key] > 3) {
                    newArray.push(key);
                }
            }

            expect(newArray).toEqual(func(array));

            return newArray;
        }

        const array = [2, 5, 8];
        lazy(func, array);
    });
});