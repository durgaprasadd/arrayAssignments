let assert = require("assert");
let findLowestNumber = require("./findLowestNumber.js").findLowestNumber;

assert.deepEqual(findLowestNumber([1]),1);
assert.deepEqual(findLowestNumber([1,2]),1);
assert.deepEqual(findLowestNumber([1,2,10,5,2]),1);
assert.deepEqual(findLowestNumber([1,1]),1);
