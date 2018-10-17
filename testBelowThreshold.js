let assert = require("assert");
let countBelowThreshold = require("./countBelowThreshold.js").countBelowThreshold;
assert.deepEqual(countBelowThreshold([1,2,3,4,5,2,7],4),4);
