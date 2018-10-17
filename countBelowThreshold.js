const countBelowThreshold = function(list,thresholdValue){
  let count=0;
  for(let index=0;index<list.length;index++){
    if(list[index]<thresholdValue){
      count++;
    }
  }
  return count;
}

exports.countBelowThreshold = countBelowThreshold;
