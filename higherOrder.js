//  HigherOrder:-is a function that either takes one or more functions as arguments, or returns a function as its result. 

function add(a, b, cb) {
  //We use higer order function if we have Time consuming task
  let result = a + b;
  cb(result);
  return () => {
    console.log(result);
  };
}

// add(2, 3, (val) => console.log(val));
let resultFunction = add(2, 3, () => {});
resultFunction();
