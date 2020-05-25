const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};
const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

//Test Case: Check with one element
const word = ["Labs"];
tail(word);
assertEqual(word.length, 1); // ensure we get back one element

//Test Case: Check with empty array with fail condition
const emptyArrayFail = [];
tail(emptyArrayFail);
assertEqual(emptyArrayFail.length, 1); // ensure we get back zero element

//Test Case: Check with empty array with true condition
const emptyArrayTrue = [];
tail(emptyArrayTrue);
assertEqual(emptyArrayTrue.length, 0); // ensure we get back zero element