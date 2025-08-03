// "JavaScript uses lexical scoping, which means that when a function like y() is executed, it first looks for variables like age in its own local scope (memory space). If it doesn't find it there, it looks up the scope chain — going to its lexical parent (the function in which it was defined, not called) — and continues up until it finds the variable or reaches the global scope."

// A function bind together with it lexical environment.
// Function along with its lexical scope bundled togthter forms a closure

//Uses
//Module design Pattern
// currying
//Function like once
// Memoize
// maintaining state in async world
// setTimeouts
// Iterators
function x() {
  var age = 8;
  function y() {
    console.log(age);
  }
  age = 100;
  //   y();
  return y;
}
var z = x();
console.log(z);

//y function remembers its lexical scope where its come from
// ......
z();
