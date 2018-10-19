let assert = require("assert");
let countBelowThreshold = require("./countBelowThreshold.js").countBelowThreshold;

assert.deepEqual(countBelowThreshold([],4),0);
assert.deepEqual(countBelowThreshold([3,4,5,2],0),0);
assert.deepEqual(countBelowThreshold([1,2,3,4],5),4);
assert.deepEqual(countBelowThreshold([1,2,3,4,5,2,7],4),4);
