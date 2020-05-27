const eqArrays = function(firstArray,secondArray) {
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
      return true;
    }
  } else {
    return false;
  }
};

const assertArraysEqual = function(firstArray,secondArray){
  if(eqArrays(firstArray,secondArray)){
    console.log(`✅Assertion Passed: ${firstArray} === ${secondArray}`);
  }else{
    console.log(`🛑Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const without = function(source,itemsToRemove){
  let newArray = [];
  let flag = false;
  for(let i = 0;i < source.length;i++){
    for(let j = 0; j < itemsToRemove.length;j++){
      if(itemsToRemove[j] === source[i]){
        flag=true;
      }
    }
    if(flag === false)
    newArray.push(source[i]);
    flag = false;
  }
  return newArray;
}

assertArraysEqual(without([1, 2, 3], [1]),[2,3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"]); // => ["1", "2"]

assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]),["hello","world"]);
