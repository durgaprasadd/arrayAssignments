let assert = require("assert");
let countOddNumbers = require("./countOddNumbers.js").countOddNumbers;

assert.deepEqual(countOddNumbers([]),0);
assert.deepEqual(countOddNumbers([1,2]),1);
assert.deepEqual(countOddNumbers([1,2,3]),2);
assert.deepEqual(countOddNumbers([1,2,3,4,5,6,7]),4);
