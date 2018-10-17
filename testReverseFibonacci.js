let assert = require("assert");
let reverseFibonacci = require("./reverseFibonacci.js").reverseFibonacci;
assert.deepEqual(reverseFibonacci(5),[3,2,1,1,0]);
