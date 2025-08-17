// Callback is super powerful way of handling async operation of js.
// Issues:- 1]Callback hell
//          2]Inversion of control

//E commerce
// One callback is inside another callback is inside another api or if code starts to grow horizontally instead of vertically
//Not maintainable
//known as pyramid of doom
const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  api.proceedPayment(function () {
    api.showOrderSummary({
      function() {
        api.updateWallet();
      },
    });
  });
});

//Inversion of control
