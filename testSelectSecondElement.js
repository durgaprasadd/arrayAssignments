let assert = require("assert");
let selectSecondElement = require("./selectSecondElement.js").selectSecondElement;

assert.deepEqual(selectSecondElement([]),[]);
assert.deepEqual(selectSecondElement([1,2,3]),[2]);
assert.deepEqual(selectSecondElement([1,2,3,5]),[2,5]);
assert.deepEqual(selectSecondElement([1,2,3,5,2]),[2,5]);
