const reverseFibonacci = function(limit){
  let result=[];
  let previousValue=0;
  let currentValue=1;
  for(let index=0; index<limit ; index++){
    result.unshift(previousValue);
    previousValue = currentValue;
    currentValue += result[0];
  }
  return result;
}
exports.reverseFibonacci=reverseFibonacci;
