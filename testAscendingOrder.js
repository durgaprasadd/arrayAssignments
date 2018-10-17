let assert = require("assert");
let checkAscendingOrder = require("./checkAscendingOrder.js").checkAscendingOrder;
assert.deepEqual(checkAscendingOrder([1,2,3,4,3]),false);
