const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //console.log("✅Assertion Passed: " + actual + " === " + expected);
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("🛑Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
