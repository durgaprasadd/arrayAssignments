let assert = require("assert");
let selectOdd = require("./selectOdd.js").selectOdd;

assert.deepEqual(selectOdd([]),[]);
assert.deepEqual(selectOdd([1,2]),[1]);
assert.deepEqual(selectOdd([1,2,3]),[1,3]);
assert.deepEqual(selectOdd([1,2,3,4,5,4]),[1,3,5]);
