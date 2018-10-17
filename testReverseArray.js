let assert = require("assert");
let reverseArray = require("./reverseArray.js").reverseArray;
assert.deepEqual(reverseArray([1,2,3,4,5]),[5,4,3,2,1]);
