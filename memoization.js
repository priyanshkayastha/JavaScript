// Memoization is an optimization technique that can be used to reduce time-consuming by saving previous input to something called cache and returning the result from it
const calc = (n) => {
  let sum = 0;
  for (let index = 0; index <= n; index++) {
    sum += index;
  }
  return sum;
};

const memoize = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("Cache");
      console.log(cache);

      return cache[n];
    } else {
      console.log("Calculating first time");

      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
};

console.time();
const efficient = memoize(calc);
console.log(efficient(5));
console.timeEnd();

console.time();
console.log(efficient(5));
console.timeEnd();


// {'5':15,'6':}
// console.log(calc(5));
