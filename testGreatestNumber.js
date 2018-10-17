let assert = require("assert");
let findGreatestNumber = require("./findGreatestNumber.js").findGreatestNumber;
assert.deepEqual(findGreatestNumber([1,2,10,5,2]),10);
