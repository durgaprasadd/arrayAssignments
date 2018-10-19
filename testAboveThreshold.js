let assert = require("assert");
let countAboveThreshold = require("./countAboveThreshold.js").countAboveThreshold;

assert.deepEqual(countAboveThreshold([],4),0);
assert.deepEqual(countAboveThreshold([1,2,3],4),0);
assert.deepEqual(countAboveThreshold([1,2,3,4,5,6,7],4),3);
assert.deepEqual(countAboveThreshold([1,2,3,4,5,6,7],0),7);
