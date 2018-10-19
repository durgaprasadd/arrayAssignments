let assert = require("assert");
let reverseArray = require("./reverseArray.js").reverseArray;

assert.deepEqual(reverseArray([]),[]);
assert.deepEqual(reverseArray([1]),[1]);
assert.deepEqual(reverseArray([1,2]),[2,1]);
assert.deepEqual(reverseArray([1,2,3,4,5,2,7]),[7,2,5,4,3,2,1]);
