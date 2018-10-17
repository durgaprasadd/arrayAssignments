const findLowestNumber = function(list){
  let lowestNumber=list[0];
  for(let index=0;index<list.length;index++){
    if(list[index]<lowestNumber){
      lowestNumber=list[index];
    }
  }
  return lowestNumber;
}
exports.findLowestNumber=findLowestNumber;
