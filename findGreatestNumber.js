const findGreatestNumber = function(list){
  let greatestNumber=list[0];
  for(let index=0;index<list.length;index++){
    if(list[index]>greatestNumber){
      greatestNumber=list[index];
    }
  }
  return greatestNumber;
}
exports.findGreatestNumber=findGreatestNumber;
