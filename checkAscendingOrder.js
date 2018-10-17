const checkAscendingOrder = function(list){
  let result=true;
  for(let index=1;index<list.length;index++){
    if(list[index]<list[index-1]){
      result = false;
      break;
    }
  }
  return result;
}

exports.checkAscendingOrder=checkAscendingOrder;
