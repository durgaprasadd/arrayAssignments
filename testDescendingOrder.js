let assert = require("assert");
let checkDescendingOrder = require("./checkDescendingOrder.js").checkDescendingOrder;
assert.deepEqual(checkDescendingOrder([1,2,3,4,5]),false);
