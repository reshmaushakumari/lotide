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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
//Higher order function Map
//const result = words.map(word => word[0]);
//assertArraysEqual(result,[ 'g', 'c', 't', 'm', 't' ]);

//Map which we defined
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word[1]);
console.log(results2);



