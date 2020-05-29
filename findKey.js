// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //console.log("✅Assertion Passed: " + actual + " === " + expected);
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("🛑Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKey = function(array, callback) {
  const keyValue = Object.keys(array);
  for(let item of keyValue) {
    if(callback(array[item])) {
      return item;
    }
  }
}

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),'noma'); // => "noma"