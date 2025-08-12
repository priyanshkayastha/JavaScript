let name = {
  firstName: "Jay",
  lastName: "Patel",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " " + state
  );
};

printFullName.call(name, "Ahmedabad");

let name2 = {
  firstName: "Sachin",
  lastName: "Pawar",
};

//function borrowing borrow function from other object use at data of other object

//Call:-Used to invoke a function dirctly by passing to the refrence which point to the this variable
printFullName.call(name2, "Surat", "Ahmedabad");

//apply:-Same as call Second argument take as array list of the parameter which needs to pass function

printFullName.apply(name2, ["Mumbai", "India"]);

//bind:-does not bind invokes the method gives u a copy of same exactly method which we can invoke later.
let copyOfName = printFullName.bind(name2, "Dubai", "India");
copyOfName();
