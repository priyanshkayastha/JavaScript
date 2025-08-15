setTimeout(() => {
  console.log("Runs after 2 sec");
}, 2000);
// console.log('Hello');

let count = 0;
let timer = setInterval(() => {
  console.log("Runs every 1 sec");
  count++;
  if (count == 5) {
    clearInterval(timer);

  }
}, 1000);


// Drawback	Explanation
// ❌ Not precise timing	Delays may be longer due to blocking code or busy main thread.
// ❌ Can block UI (in browser)	If the callback is heavy, it freezes the browser.
// ❌ Difficult to manage multiple timers	Especially when dealing with clearTimeout/clearInterval.
// ❌ Memory leaks	Forgetting to clear intervals can lead to memory issues.
// ❌ Callback Hell	Nesting setTimeouts can lead to hard-to-maintain code.
