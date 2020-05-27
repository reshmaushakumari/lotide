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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let i = 0;i < sentence.length;i++){
    if (sentence[i] !== ' ') {

      //check if array exists for current letter in result
      //if present, push position of the letter into the array in the result object
      // if array does not exist, create a new array in result object and push
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }


      
    }
  }
  //console.log(results);
  return results;
};

assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5,15,18]);
assertArraysEqual(letterPositions("hello").e, [1]);
