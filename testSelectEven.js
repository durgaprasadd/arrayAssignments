let assert = require("assert");
let selectEven = require("./selectEven.js").selectEven;
assert.deepEqual(selectEven([1,2,3,4,5,4]),[2,4,4]);
