const reverseAnArray = function(list){
  result=[];
  for(let index=0;index<list.length;index++){
    result.unshift(list[index]);
  }
  return result;
}

exports.reverseAnArray=reverseAnArray;
