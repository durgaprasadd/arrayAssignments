const findAverageOfList = function(numbers){
  let sum=0;
  for(let value of numbers){
    sum += value;
  }
  return sum/numbers.length;
}
exports.findAverageOfList=findAverageOfList;
