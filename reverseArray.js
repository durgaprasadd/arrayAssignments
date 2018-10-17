const reverseArray=function(list){
  let length=Math.ceil(list.length/2);
  for(let index=0;index<length;index++){
    let element = list[index];
    list[index] = list[list.length-index-1];
    list[list.length-index-1] = element;
  }
  return list;
}
exports.reverseArray=reverseArray;
