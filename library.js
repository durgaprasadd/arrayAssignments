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

exports.extractDigits=extractDigits;
exports.uniqueOfArray=uniqueOfArray;
exports.unionOfArray=unionOfArray;
exports.intersectionOfArray=intersectionOfArray;
