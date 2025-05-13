const multiply = (a, b, c) => a * b * c;
const add = (a, b, c, d, e) => a + b + c + d + e;

const curry = (f) => {
  let args = [];

  const getNextArgFunc = (arg) => {
    args.push(arg);

    // Append new arguments as many times as the input function requires
    if (args.length < f.length) {
      return getNextArgFunc;
    }

    return f(...args);
  };

  return getNextArgFunc;
};

console.log(curry(add)(1)(2)(3)(4)(5) == add(1, 2, 3, 4, 5)); // should be true
console.log(curry(multiply)(1)(2)(3) == multiply(1, 2, 3)); // should be true
