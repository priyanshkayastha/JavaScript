//Throttle:-  “If we have a time window, then only the first API call will be executed immediately, and the rest will be ignored until that duration completes. After that, the function is allowed to run again.”

function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

function sendChatMessage(message) {
  console.log(`Sending message`, message);
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 1000);

sendChatMessageWithSlowMode("Hi");
sendChatMessageWithSlowMode("Hello");
sendChatMessageWithSlowMode("Hello World");
sendChatMessageWithSlowMode("This will run after 2 sec");
