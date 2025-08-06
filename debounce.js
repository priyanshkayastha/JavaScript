//debounce:- If user is not typed anything in specified time then only will do api call if user starts to type then timer will reset

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId=setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = (query) => {
  console.log(`Searched for`, query);
};

const searchWithDebounce = debounce(search, 2000);

searchWithDebounce("Ha");
searchWithDebounce("Har");
searchWithDebounce("Hard");
searchWithDebounce("Hard j");
searchWithDebounce("Hard js");
searchWithDebounce("Hard js");
