const eqArrays = function(firstArray,secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
      return true;
    }
};

const assertArraysEqual = function(firstArray,secondArray){
  if(eqArrays(firstArray,secondArray)){
    console.log(`✅Assertion Passed: ${firstArray} === ${secondArray}`);
  }else{
    console.log(`🛑Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

assertArraysEqual([1,2],[1,2,3]);
assertArraysEqual(["hello","lighthouse"],["hello"]);