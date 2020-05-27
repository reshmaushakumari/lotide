const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //console.log("✅Assertion Passed: " + actual + " === " + expected);
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("🛑Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function (inputString){
  const results = {};

  for(const item of inputString){
    if (item !== ' ') {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  console.log(results);
  return results;

};

const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
