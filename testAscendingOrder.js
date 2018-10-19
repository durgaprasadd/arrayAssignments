let assert = require("assert");
let checkAscendingOrder = require("./checkAscendingOrder.js").checkAscendingOrder;

assert.deepEqual(checkAscendingOrder([]),true);
assert.deepEqual(checkAscendingOrder([1,2]),true);
assert.deepEqual(checkAscendingOrder([1,2,3,4,3]),false);
assert.deepEqual(checkAscendingOrder([1,2,3,4,10]),true);
