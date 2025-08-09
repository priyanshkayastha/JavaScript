// Promise are used to handle async operation in js

// const cart = ["shoes", "pants", "kurta"];
// createOrder(cart, function () {
//   proceedtoPayment(orderId);
// }); //orderId

// const promise = createOrder(cart);

// {data:undefined}
// {data:OrderDetails}

//attaching a function in promise object also have a control of a program

// promise.then(function (orderId) {
//   proceedtoPayment(orderId);
// });

// states :-Pending,Fullfilled,Rejected
//immutable

const GITHUB_API = "https://api.github.com/users/priyanshkayastha";
const user = fetch(GITHUB_API);
console.log(user);

//callback

user
  .then(function (data) {
    console.log(data);
  })
  .then(function (orderId) {
    return proceedtoPayment(orderId);
  });

//Interview Que
// Promises:-Promise is a object that represents eventual completion of asyc of operation.
//return the promise or will loose some data