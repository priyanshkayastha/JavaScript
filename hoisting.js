//hoisting :-"In JavaScript, when code runs, a Global Execution Context is created before the actual execution phase. During this context creation phase, memory is allocated for all variables and functions. Function declarations are hoisted with their full definitions, while variables declared with var are hoisted and initialized to undefined. However, variables declared with let and const are also hoisted but stay in the Temporal Dead Zone and are not initialized until their definition is encountered."

// - var → hoisted with value undefined
// - let/const → hoisted but in TDZ (cannot access before init)
// - function declaration → fully hoisted
// - function expression / arrow function → behaves like the variable it's assigned to (usually let/const)


getName();
//Refrence Error x is not defined
console.log(x); //undefined

var x = 7;
function getName() {  
  console.log("Hello World");
}

//It just behaves like another variable allocate memory as undefined

// var getName3=function(){

// }

// var getName2=()=>{
//     console.log();

// }
