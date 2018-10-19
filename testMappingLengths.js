let assert = require("assert");
let mappingLength = require("./mappingLengths.js").mappingLength;

assert.deepEqual(mappingLength(["rama"]),[4]);
assert.deepEqual(mappingLength(["rama","seeta"]),[4,5]);
assert.deepEqual(mappingLength(["rama","seeta","lakshmana"]),[4,5,9]);
assert.deepEqual(mappingLength(["rama","seeta","lakshmana","bharata","hanuman"]),[4,5,9,7,7]);
