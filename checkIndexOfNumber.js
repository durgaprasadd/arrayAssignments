const checkIndexOfNumber = function(list,number){
  let result;
  for(let index=0;index<list.length;index++){
    if(list[index]==number){
      result=index;
      break;
    }
  }
  return result;
}

exports.checkIndexOfNumber=checkIndexOfNumber;
