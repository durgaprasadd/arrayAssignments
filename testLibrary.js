let assert = require("assert");
let lib = require("./library.js");
let extractDigits = lib.extractDigits;
let uniqueOfArray = lib.uniqueOfArray;
let unionOfArray = lib.unionOfArray;
let intersectionOfArray = lib.intersectionOfArray;

//-------extract--Digits-----------
assert.deepEqual(extractDigits(12),[1,2]);
assert.deepEqual(extractDigits(1),[1]);
assert.deepEqual(extractDigits(123),[1,2,3]);
assert.deepEqual(extractDigits(2048),[2,0,4,8]);

//--------uniqueOfArray-------------
assert.deepEqual(uniqueOfArray([]),[])
assert.deepEqual(uniqueOfArray([1]),[1])
assert.deepEqual(uniqueOfArray([1,2]),[1,2])
assert.deepEqual(uniqueOfArray([1,2,2,2,2,1]),[1,2])

//---------unionOfArray------------
assert.deepEqual(unionOfArray([],[]),[]);
assert.deepEqual(unionOfArray([],[1]),[1]);
assert.deepEqual(unionOfArray([1],[]),[1]);
assert.deepEqual(unionOfArray([1,2,3,4,5],[2,3,1]),[1,2,3,4,5]);

//----------intersectionOfArray--------
assert.deepEqual(intersectionOfArray([],[]),[]);
assert.deepEqual(intersectionOfArray([1],[]),[]);
assert.deepEqual(intersectionOfArray([],[1]),[]);
assert.deepEqual(intersectionOfArray([1],[1]),[1]);

