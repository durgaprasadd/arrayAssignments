let assert = require("assert");
let lib = require("./library.js");
let extractDigits = lib.extractDigits;
let uniqueOfArray = lib.uniqueOfArray;
let unionOfArray = lib.unionOfArray;
let intersectionOfArray = lib.intersectionOfArray;
let differenceOfArrays = lib.differenceOfArrays;
let isSubset = lib.isSubset;
let zipArray = lib.zipArray;
let rotateArray = lib.rotateArray;
let partitionOfArray = lib.partitionOfArray;

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

//-------------differenceOfArrays---------
assert.deepEqual(differenceOfArrays([],[]),[]);
assert.deepEqual(differenceOfArrays([1],[]),[1]);
assert.deepEqual(differenceOfArrays([],[1]),[]);
assert.deepEqual(differenceOfArrays([1,2,3,4,5],[4,2,1]),[3,5]);

//-----------isSubset---------------
assert.deepEqual(isSubset([],[]),true);
assert.deepEqual(isSubset([1],[]),true);
assert.deepEqual(isSubset([],[1]),false);
assert.deepEqual(isSubset([1,2,3,4,5],[3,2]),true);

//---------zipArray--------------
assert.deepEqual(zipArray([1],[]),[]);
assert.deepEqual(zipArray([1],[1]),[[1,1]]);
assert.deepEqual(zipArray([1,2],[1]),[[1,1]]);
assert.deepEqual(zipArray([1,2,3,4,5],[3,2]),[[1,3],[2,2]]);

//-----------rotateArray-------------
assert.deepEqual(rotateArray([1,2,3],0),[1,2,3]);
assert.deepEqual(rotateArray([1,2,3],1),[2,3,1]);
assert.deepEqual(rotateArray([1,2,3],2),[3,1,2]);
assert.deepEqual(rotateArray([1,2,3],3),[1,2,3]);

//----------partitionOfArray----------
assert.deepEqual(partitionOfArray([1,2,3],0),[[],[1,2,3]]);
assert.deepEqual(partitionOfArray([1,2,3],3),[[1,2,3],[]]);
assert.deepEqual(partitionOfArray([1,2,3,4,5],2),[[1,2],[3,4,5]]);
