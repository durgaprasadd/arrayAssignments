const countEvenNumbers = function(list){
  let count=0;
  for(let index=0;index<list.length;index++){
    if(list[index]%2 == 0){
      count++;
    }
  }
  return count;
}

exports.countEvenNumbers = countEvenNumbers;
