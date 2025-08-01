// Definition: Scope of a variable is determined by its position in the source code (i.e., where it's written).

let a = 10;
function outer() {
  function inner() {
    let b = 30;
    console.log(a + b);
  }
  inner();
}

outer();

//Dynamic scoping
// Definition: Scope is determined by the call stack at runtime, not where the function is defined.

//isNAN

console.log(isNaN("Jay"));

const arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length);


let c;
console.log(c);
// console.log(d);

//Global scope
var name="Aman"
function printName(){
    console.log(`My name is ${name}`);
    
}
printName()