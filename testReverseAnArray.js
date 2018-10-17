let assert = require("assert");
let reverseAnArray = require("./reverseAnArray.js").reverseAnArray;
assert.deepEqual(reverseAnArray([1,2,3,4,5,2,7]),[7,2,5,4,3,2,1]);
