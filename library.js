//-------extract--Digits-----------
const extractDigits = function(number){
  let result = (""+number).split("");
  return result;
}

//--------uniqueOfArray-------------
const uniqueOfArray = function(list){
  let unique = [];
  for(let value of list){
    if(!unique.includes(value)){
      unique.push(value);
    }
  }
  return unique;
}

//---------unionOfArray------------
const unionOfArray = function(list1,list2){
  let union = list1;
  for(let value of list2){
    union.push(value);
  }
  union = uniqueOfArray(union);
  return union;
}

//----------intersectionOfArray--------
const intersectionOfArray = function(list1,list2){
  let intersection = [];
  for(let value of list1){
    if(list2.includes(value)){
      intersection.push(value);
    }
  }
  return intersection;
}

//-------------differenceOfArrays---------
const differenceOfArrays = function(list1,list2){
  let difference = [];
  for(let value of list1){
    if(!list2.includes(value)){
      difference.push(value);
    }
  }
  return difference;
}

//-----------isSubset---------------
const isSubset = function(list1,list2){
  let result = true;
  for(let value of list2){
    if(!list1.includes(value)){
      result = false;
      break;
    }
  }
  return result;
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
const partitionOfArray = function(list,limit){
  let result = [[],[]];
  for(let value of list){
    if(value>limit){
      result[1].push(value);
    }else{
      result[0].push(value);
  }
  }
  return result;
}

exports.extractDigits=extractDigits;
exports.uniqueOfArray=uniqueOfArray;
exports.unionOfArray=unionOfArray;
exports.intersectionOfArray=intersectionOfArray;
exports.differenceOfArrays=differenceOfArrays;
exports.isSubset = isSubset;
exports.zipArray = zipArray;
exports.rotateArray = rotateArray;
exports.partitionOfArray = partitionOfArray;
