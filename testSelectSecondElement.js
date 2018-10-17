let assert = require("assert");
let selectSecondElement = require("./selectSecondElement.js").selectSecondElement;
assert.deepEqual(selectSecondElement([1,2,3,5,2]),[2,5]);
