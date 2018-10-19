let assert = require("assert");
let findAverageOfList = require("./findAverageOfList.js").findAverageOfList;

assert.deepEqual(findAverageOfList([1]),1);
assert.deepEqual(findAverageOfList([1,2]),1.5);
assert.deepEqual(findAverageOfList([1,2,3]),2);
assert.deepEqual(findAverageOfList([1,-2,-3,4,5]),1);
