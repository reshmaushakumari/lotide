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

const assertArraysEqual = function(firstArray,secondArray) {
  if (eqArrays(firstArray,secondArray)) {
    console.log(`✅Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const middle = function(array) {
  let newArray = [];
  let index = 0;
  if (array.length <= 2) {
    return newArray;
  } else {
    if (array.length % 2 !== 0) {
      index = array.length / 2;
      newArray.push(array[Math.floor(index)]);
    } else {
      index = array.length / 2;
      newArray.push(array[index - 1]);
      newArray.push(array[index]);
    }
    return newArray;
  }
};

assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]),[]); // => []
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
