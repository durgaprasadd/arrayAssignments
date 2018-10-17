let assert = require("assert");
let countEvenNumbers = require("./countEvenNumbers.js").countEvenNumbers;
assert.deepEqual(countEvenNumbers([1,2,3,4,5,6,7]),3);
