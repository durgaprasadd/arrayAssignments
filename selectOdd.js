const selectOdd = function(givenInput){
  let length=givenInput.length;
  for(let index=0;index<length;index++){
    if(givenInput[0]%2 == 0){
      givenInput.shift();
    }else{
      givenInput.push(givenInput.shift());
    }
  }
  return givenInput;
}

exports.selectOdd = selectOdd;
