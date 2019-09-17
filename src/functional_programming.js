export function pureFunction(a1, a2, a3, a4, a5, a6) {
    let sum = 0;
    const params = [a1, a2, a3, a4, a5, a6];
    for (const arg of params) {
        sum += arg;
    }

    return sum * 10;
}

function applyPartial(action) {
    const firstArguments = Array.prototype.slice.call(arguments, 1);

    return (...args) => action.apply(this, [...firstArguments, ...args]);
}

export function curry(action) {
    const arity = action.length;

    return function returnFunction(...args) {
        if (args.length >= arity) {
            return action.apply(this, args);
        }

        return (...moreArgs) => {
            const newArgs = [...args, ...moreArgs];

            return returnFunction(...newArgs);
        };
    };
}

function memoize(action) {
    const cacheValues = new Map();

    return (...args) => {
        const parameters = args[0];

        if (cacheValues.has(parameters.toString())) {
            console.log("From cache");

            return cacheValues.get(parameters.toString());
        }

        console.log("Calculating");
        const result = action(parameters);
        cacheValues.set(parameters.toString(), result);

        return result;
    };
}

function multiplicationOfParameters() {
    return (...args) => {
        let result = 1;

        for (let i = 0; i < args.length; i++) {
            result *= args[i];
        }

        return result;
    };
}

function forLazy(arrayPar, n) {
    const newArray = [];

    for (const key of arrayPar) {
        if (key > n) {
            newArray.push(key);
        }
    }

    return newArray;
}

export function lazy(action) {
    const arrayOfParameters = Array.prototype.slice.call(arguments, 1);

    return () => action.apply(this, arrayOfParameters);
}