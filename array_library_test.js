let assert = require("assert");
let lib = require("./array_library.js");
let extractDigits = lib.extractDigits;
let uniqueOfArray = lib.findUniqueOfArray;
let unionOfArray = lib.unionOfArray;
let intersectionOfArray = lib.intersectionOfArray;
let differenceOfArrays = lib.differenceOfArrays;
let isSubset = lib.isSubset;
let zipArray = lib.zipArray;
let rotateArray = lib.rotateArray;
let partitionOfArray = lib.partitionOfArray;
let selectEven = lib.selectEven;
let selectOdd = lib.selectOdd;
let sumOfList = lib.sumOfList;
let reverseAnArray = lib.reverseAnArray;
let selectSecondElement = lib.selectSecondElement;
let reverseFibonacci = lib.reverseFibonacci;
let findGreatestNumber = lib.findGreatestNumber;
let findSmallestNumber = lib.findSmallestNumber;
let averageOfList = lib.averageOfList;
let mappingLengths = lib.mappingLengths;
let countEvenNumbers = lib.countEvenNumbers;
let countOddNumbers = lib.countOddNumbers;
let countAboveThreshold = lib.countAboveThreshold;
let countBelowThreshold = lib.countBelowThreshold;
let checkIsAscend = lib.checkIsAscend;
let checkIsDescend = lib.checkIsDescend;

//---------selectEven Numbers----------
assert.deepEqual(selectEven([]),[]);
assert.deepEqual(selectEven([1,2]),[2]);
assert.deepEqual(selectEven([1,2,3]),[2]);
assert.deepEqual(selectEven([1,2,3,4,5,4]),[2,4,4]);

//----------selectOdd Numbers---------
assert.deepEqual(selectOdd([]),[]);
assert.deepEqual(selectOdd([1,2]),[1]);
assert.deepEqual(selectOdd([1,2,3]),[1,3]);
assert.deepEqual(selectOdd([1,2,3,4,5,4]),[1,3,5]);

//-----------countEvenNumbers-----------
assert.deepEqual(countEvenNumbers([]),0);
assert.deepEqual(countEvenNumbers([1,2]),1);
assert.deepEqual(countEvenNumbers([1,2,3]),1);
assert.deepEqual(countEvenNumbers([1,2,3,4,5,6,7]),3);

//------------countOddNumbers--------------
assert.deepEqual(countOddNumbers([]),0);
assert.deepEqual(countOddNumbers([1,2]),1);
assert.deepEqual(countOddNumbers([1,2,3]),2);
assert.deepEqual(countOddNumbers([1,2,3,4,5,6,7]),4);

//----------sum of list---------------
assert.deepEqual(sumOfList([]),0);
assert.deepEqual(sumOfList([1]),1);
assert.deepEqual(sumOfList([1,2]),3);
assert.deepEqual(sumOfList([1,2,3,4,5]),15);

//------------average of list----------
assert.deepEqual(averageOfList([1]),1);
assert.deepEqual(averageOfList([1,2]),1.5);
assert.deepEqual(averageOfList([1,2,3]),2);
assert.deepEqual(averageOfList([1,-2,-3,4,5]),1);

//---------reverse an array-----------
assert.deepEqual(reverseAnArray([]),[]);
assert.deepEqual(reverseAnArray([1]),[1]);
assert.deepEqual(reverseAnArray([1,2]),[2,1]);
assert.deepEqual(reverseAnArray([1,2,3,4,5,2,7]),[7,2,5,4,3,2,1]);

//-------------selectSecondElement--------
assert.deepEqual(selectSecondElement([]),[]);
assert.deepEqual(selectSecondElement([1,2,3]),[2]);
assert.deepEqual(selectSecondElement([1,2,3,5]),[2,5]);
assert.deepEqual(selectSecondElement([1,2,3,5,2]),[2,5]);

//--------------reverseFibonacci----------
assert.deepEqual(reverseFibonacci(1),[0]);
assert.deepEqual(reverseFibonacci(2),[1,0]);
assert.deepEqual(reverseFibonacci(3),[1,1,0]);
assert.deepEqual(reverseFibonacci(5),[3,2,1,1,0]);

//---------------greatestNumber----------
assert.deepEqual(findGreatestNumber([1]),1);
assert.deepEqual(findGreatestNumber([1,2]),2);
assert.deepEqual(findGreatestNumber([1,2,10,5,2]),10);
assert.deepEqual(findGreatestNumber([1,1]),1);

//---------------smallestNumber---------
assert.deepEqual(findSmallestNumber([1]),1);
assert.deepEqual(findSmallestNumber([1,2]),1);
assert.deepEqual(findSmallestNumber([1,2,10,5,2]),1);
assert.deepEqual(findSmallestNumber([1,1]),1);

//---------------mappingLengths--------
assert.deepEqual(mappingLengths(["rama"]),[4]);
assert.deepEqual(mappingLengths(["rama","seeta"]),[4,5]);
assert.deepEqual(mappingLengths(["rama","seeta","lakshmana"]),[4,5,9]);
assert.deepEqual(mappingLengths(["rama","seeta","lakshmana","bharata","hanuman"]),[4,5,9,7,7]);

//---------------countAboveThreshold--------
assert.deepEqual(countAboveThreshold([],4),0);
assert.deepEqual(countAboveThreshold([1,2,3],4),0);
assert.deepEqual(countAboveThreshold([1,2,3,4,5,6,7],4),3);
assert.deepEqual(countAboveThreshold([1,2,3,4,5,6,7],0),7);

//-------------countBelowThreshold---------
assert.deepEqual(countBelowThreshold([],4),0);
assert.deepEqual(countBelowThreshold([3,4,5,2],0),0);
assert.deepEqual(countBelowThreshold([1,2,3,4],5),4);
assert.deepEqual(countBelowThreshold([1,2,3,4,5,2,7],4),4);

//------------checkIsAscend---------------
assert.deepEqual(checkIsAscend([]),true);
assert.deepEqual(checkIsAscend([1,2]),true);
assert.deepEqual(checkIsAscend([1,2,3,4,3]),false);
assert.deepEqual(checkIsAscend([1,2,3,4,10]),true);

//--------------checkIsDescend------------
assert.deepEqual(checkIsDescend([]),true);
assert.deepEqual(checkIsDescend([3,2,1]),true);
assert.deepEqual(checkIsDescend([2,1]),true);
assert.deepEqual(checkIsDescend([1,2,3,4,5]),false);

//-------extract--Digits-----------
assert.deepEqual(extractDigits(12),[1,2]);
assert.deepEqual(extractDigits(1),[1]);
assert.deepEqual(extractDigits(123),[1,2,3]);
assert.deepEqual(extractDigits(2048),[2,0,4,8]);

//--------uniqueOfArray-------------
let input = [];
assert.deepEqual(input.reduce(uniqueOfArray,[]),[])
input = [1];
assert.deepEqual(input.reduce(uniqueOfArray,[]),[1])
input = [1,2];
assert.deepEqual(input.reduce(uniqueOfArray,[]),[1,2])
input = [1,2,2,2,2,1];
assert.deepEqual(input.reduce(uniqueOfArray,[]),[1,2])

//---------unionOfArray------------
assert.deepEqual(unionOfArray([])([]),[]);
assert.deepEqual(unionOfArray([])([1]),[1]);
assert.deepEqual(unionOfArray([1])([]),[1]);
assert.deepEqual(unionOfArray([1,2,3,4,5])([2,3,1]),[1,2,3,4,5]);

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




console.log("all tests are passed!");
