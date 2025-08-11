const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);
// console.log(promise);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  //attaching failure callback function using a catch to a promise object
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("Definitetly called");
  });

//way to create promise

//Producer end
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //CreateOrder
    //validateCart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    //logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
        // console.log(promise);
      }, 5000);
    }
  });
  return pr;
}

function proceedPayment(orderId) {
  ///
  return new Promise(function (resolve, reject) {
    resolve("Payment Successfull");
  });
}

function validateCart(cart) {
  // return true;
  return false;
}
