let originalObj = {
  name: "Aman",
  address: { city: "Ahmedabad" },
};

// let shallowCopy=Object.assign({},originalObj)
// console.log(shallowCopy);

//Spread operator
//Shallow copy:- If u change in original obj will reflect on shallow copy bcz of memory refrence will same.
let shallowCopy = { ...originalObj };
console.log(shallowCopy);

originalObj.address.city = "Mumbai";
console.log(shallowCopy);

//Deep copy:-It will create new memory reference
//Now deepCopy.address is its own copy — not linked to originalObj.


let deepCopy = JSON.parse(JSON.stringify(originalObj));

originalObj.address.city = "Delhi";

console.log(shallowCopy.address.city);
console.log(deepCopy.address.city);
