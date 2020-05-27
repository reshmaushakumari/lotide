const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //console.log("✅Assertion Passed: " + actual + " === " + expected);
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log("🛑Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function(objectInput,objectValue) {
    const keyValue = Object.keys(objectInput);
    for(const item of keyValue) {
      if(objectInput[item] === objectValue) {
        return item;
      }
    }
  
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
