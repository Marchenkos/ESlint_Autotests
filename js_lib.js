function pureFunction(a1, a2, a3, a4, a5, a6) {
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

function curry(action) {
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

function folding(array, foldCallback, accumulator = 0) {
  let result = accumulator;

  for (let i = 0; i < array.length; i++) {
    result = foldCallback(array[i], result);
  }

  return result;
}

function map(array, callback) {
  return folding(array, (element, accumulator) => {
    accumulator.push(callback(element));

    return accumulator;
  }, []);
}

function filter(array, callback) {
  return folding(array, (element, accumulator) => {
    if (callback(element)) {
      accumulator.push(element);
    }

    return accumulator;
  }, []);
}

function average(array) {
  const averageValue = folding(array, (a, b) => a + b, 0);

  return averageValue / array.length;
}

function averageOfEven(array) {
  const evenArray = filter(array, (a) => a % 2 == 0);
  const result = average(evenArray);

  return result;
}

function memoize(action) {
  const cacheValues = new Map();

  return (...args) => {
    const parameters = args[0];

    if (cacheValues.has(parameters.toString())) {
      console.log('From cache');

      return cacheValues.get(parameters.toString());
    }

    console.log('Calculating');
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

function lazy(action) {
  const arrayOfParameters = Array.prototype.slice.call(arguments, 1);

  return () => action.apply(this, arrayOfParameters);
}

class Shape {
  constructor(name) {
    this.name = name;
  }

  static calculateArea() {
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super('Rectangle');
    this.height = height;
    this.width = width;
  }

  calculateArea() {
    return this.height * this.width;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super('Square');
    this.sideLength = sideLength;
  }

  calculateArea() {
    return this.sideLength * this.sideLength;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  calculateArea() {
    return 3.14 * this.radius * this.radius;
  }
}

class ShapesStore extends Shape {
  constructor(shapesArray) {
    super();
    this.shapesArray = shapesArray;
  }

  calculateArea() {
    let areaValue = 0;

    for (let i = 0; i < this.shapesArray.length; i++) {
      areaValue += this.shapesArray[i].calculateArea();
    }

    return areaValue;
  }
}

module.exports.average = average;
module.exports.folding = folding;
module.exports.lazy = lazy;
module.exports.forLazy = forLazy;
module.exports.Square = Square;
module.exports.averageOfEven = averageOfEven;
module.exports.curry = curry;
module.exports.pureFunction = pureFunction;

const partial1 = applyPartial(pureFunction, 3, 3, 2, 6);
const result = memoize(pureFunction);
console.log(result(1, 2, 3, 4, 5, 6));
console.log(partial1(4, 8));
console.log(map([1, 5, 10, 5, 11, 44], (a) => a * 2));
const mult = multiplicationOfParameters(pureFunction);
console.log(mult(10, 2, 30, 1, 4, 8));
const rectangle1 = new Rectangle(5, 10);
const rectangle2 = new Rectangle(15, 2);
console.log(`Area: ${rectangle1.calculateArea()}\nWidth: ${rectangle1.width}\nHeight: ${rectangle1.height}`);
const square1 = new Square(10);
const square2 = new Square(20);
const circle = new Circle(17);
console.log(`Area: ${square1.calculateArea()}\nSide length: ${square1.sideLength}`);
console.log(`Area: ${circle.calculateArea()}\nRadius: ${circle.radius}`);
const store = new ShapesStore([rectangle1, square1, square2, rectangle2, circle]);
console.log(`Total area of shapes: ${store.calculateArea()}`);
