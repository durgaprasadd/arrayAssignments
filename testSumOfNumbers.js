let assert = require("assert");
let sumOfNumbers = require("./sumOfNumbers.js").sumOfNumbers;
assert.deepEqual(sumOfNumbers([1,2,3,4,5]),15);
