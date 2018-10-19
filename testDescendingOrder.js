let assert = require("assert");
let checkDescendingOrder = require("./checkDescendingOrder.js").checkDescendingOrder;

assert.deepEqual(checkDescendingOrder([]),true);
assert.deepEqual(checkDescendingOrder([3,2,1]),true);
assert.deepEqual(checkDescendingOrder([2,1]),true);
assert.deepEqual(checkDescendingOrder([1,2,3,4,5]),false);
