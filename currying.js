//Make a copy of method and we create more methods out of it by pre setting some arguments inside a function.
//one way is bind method and closure method

// let multiply = function (x, y) {
//   console.log(x * y);
// };

let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multyplyByTwo = multiply.bind(this, 2);
// let multyplyByTwo = multiply.bind(this, 2,3);
multyplyByTwo(5);

let multyplyByThree = multiply.bind(this, 3);
multyplyByThree(5);
