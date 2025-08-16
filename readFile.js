const fs = require("fs");
fs.readFile("this.js", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
