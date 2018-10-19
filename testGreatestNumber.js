let assert = require("assert");
let findGreatestNumber = require("./findGreatestNumber.js").findGreatestNumber;

assert.deepEqual(findGreatestNumber([1]),1);
assert.deepEqual(findGreatestNumber([1,2]),2);
assert.deepEqual(findGreatestNumber([1,2,10,5,2]),10);
assert.deepEqual(findGreatestNumber([1,1]),1);
