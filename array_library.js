//---------selectEven Numbers---------
const isEven = function(number){
  return number%2==0;
}

const selectEven = function(list){
  return list.filter(isEven);
}

//----------selectOdd Numbers---------
const isOdd = function(number){
  return number%2 == 1;
}

const selectOdd = function(list){
  return list.filter(isOdd);
}

//----------countEvenNumbers--------
const countEvenNumbers = function(list){
  return selectEven(list).length;
}

//----------countOddNumbers--------
const countOddNumbers = function(list){
  return selectOdd(list).length;
}

//---------sum of list--------------
const sum = function(first,second){
  return first+second;
}

const sumOfList = function(list){
  return list.reduce(sum,0);
}

//----------average of list---------
const averageOfList = function(list){
  return sumOfList(list)/list.length;
}

//---------reverseAnArray----------
const reverse = function(reversedArray,element){
  reversedArray.unshift(element);
  return reversedArray;
}

const reverseAnArray = function(list){
  return list.reduce(reverse,[]);
}

//---------selectSecondElement-------
const selectAlternateElements = function(state,element){
  if(state.index%2 == 0){
    state.elements.push(element)
  }
  state.index++;
  return state;
}

const selectSecondElement = function(list){
  return list.reduce(selectAlternateElements,{index:1,elements:[]}).elements;
}

//-------------reverseFibonacci-----------
const reverseFibonacci = function(limit){
  let result=[];
  let previousValue=0;
  let currentValue=1;
  for(let index=0; index<limit ; index++){
    result.unshift(previousValue);
    previousValue = currentValue;
    currentValue += result[0];
  }
  return result;
}

//----------greatestNumber--------------
const largestNumber = function(first,second){
  if(first>second){
    return first;
  }
  return second;
}

const findGreatestNumber = function(list){
  return list.reduce(largestNumber);
}

//---------smallestNumber------------
const smallestNumber = function(first,second){
  return Math.min(first,second);
}

const findSmallestNumber = function(list){
  return list.reduce(smallestNumber);
}

//----------MappingLengths---------
const getLength = function(element){
  return element.length;
}

const mappingLengths = function(list){
  return list.map(getLength);
}

//---------countAboveThreshold--------
const isAboveThreshold = function(thresholdValue){
  return function(element){
    return element>thresholdValue;
  }
}

const countAboveThreshold = function(list,thresholdValue){
  return list.filter(isAboveThreshold(thresholdValue)).length;
}

//-----------countBelowThreshold-------
const isBelowThreshold = function(thresholdValue){
  return function(element){
    return element<thresholdValue;
  }
}

const countBelowThreshold = function(list,thresholdValue){
  return list.filter(isBelowThreshold(thresholdValue)).length;
}

//----------check is ascend--------------
const isAscend = function(state,element){
  if(state.elements>element){
    state.isAscend = false;
    return state;
  }
  state.elements = element;
  return state;
}

const checkIsAscend = function(list){
  return list.reduce(isAscend,{isAscend:true,elements:list[0]}).isAscend;
}

//----------check is descend-----------
checkIsDescend = function(list){
  return !checkIsAscend(list);
}

//-------extract--Digits-----------
const extractDigits = function(number){
  let result = (""+number).split("");
  return result;
}

//--------uniqueOfArray-------------
const findUniqueOfArray = function(uniqueArray,element){
    if(!uniqueArray.includes(element)){
      uniqueArray.push(element);
    }
  return uniqueArray;
}

//---------unionOfArray------------
const unionOfArray = function(list1){
  list1 = list1.reduce(findUniqueOfArray,[]);
  return function(list2){
    return list2.reduce(findUniqueOfArray,list1);
  }
}

//----------intersectionOfArray--------
const isIncluded = function(list1){
  return function(element){
    return list1.includes(element)
  }
}
const intersectionOfArray = function(list1,list2){
  return list2.filter(isIncluded(list1));
}

//-------------differenceOfArrays---------
const isNotIncluded = function(list1){
  return function(element){
    return !list1.includes(element)
  }
}
const differenceOfArrays = function(list1,list2){
  return list1.filter(isNotIncluded(list2));
}

//-----------isSubset---------------
const isSubset = function(list1,list2){
  return list2.every(isIncluded(list1));
}

//---------zipArray--------------
const zipArray = function(list1,list2){
  let range = Math.min(list1.length,list2.length);
  let result = [];
  for(let index=0;index<range;index++){
    result[index]=[list1[index],list2[index]];
  }
  return result;
}

//-----------rotateArray-------------
const rotateArray = function(list,count){
  for(let index=0;index<count;index++){
    list.push(list.shift());
  }
  return list;
}

//----------partitionOfArray----------
const partition = function(limit){
  return function(partitionedArray,element){
    index = 0;
    if(element>limit){ index = 1};
    partitionedArray[index].push(element);
    return partitionedArray;
  }
}

const partitionOfArray = function(list,limit){
  return list.reduce(partition(limit),[[],[]]);
}

module.exports = { selectEven, extractDigits, findUniqueOfArray, unionOfArray,
  intersectionOfArray, differenceOfArrays, isSubset, zipArray, rotateArray,
  partitionOfArray, selectOdd, sumOfList, reverseAnArray, selectSecondElement,
  reverseFibonacci, findGreatestNumber, findSmallestNumber, averageOfList,
  mappingLengths, countOddNumbers, countEvenNumbers, countAboveThreshold,
  countBelowThreshold, checkIsAscend, checkIsDescend
}
