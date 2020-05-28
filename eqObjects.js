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

const eqObjects = function(object1, object2) {
  let objArray1 = Object.keys(object1);
  let objArray2 = Object.keys(object2);
  if(objArray1.length !== objArray2.length) {
    return false;
  }
  for(let i = 0;i < objArray1.length;i++) {
    let objKey = objArray1[i];
    let ob = object1[objKey];
    let ob2 = object2[objKey];

    if(Array.isArray(ob) && Array.isArray(ob2)) {
      let f = eqArrays(ob,ob2);
      return f;
    } else {
      if(ob !== ob2) {
        return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);