const selectSecondElement = function(list){
  let result=[];
  for(let index=1;index<list.length;index+=2){
    result.push(list[index]);
  }
  return result;
}
exports.selectSecondElement=selectSecondElement;
