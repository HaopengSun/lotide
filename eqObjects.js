const assertEqual = function(actual, expected) {
  // let correctMsg = `Assertion Passed: ${actual} === ${expected}`;
  let correctMsg = 'Assertion Passed: ' + actual + '===' + expected;
  let errorMsg = 'Assertion Failed: ' + actual + '!==' + expected;
  if (actual === expected) {
    console.log(correctMsg);
  } else {
    console.log(errorMsg);
  }
};

const eqArrays = function(arr1, arr2){
  if (arr1.length === arr2.length){
      for (let i = 0; i < arr1.length; i++){
          if (arr1[i] === arr2[i]){
              continue;
          } else {
              return false;
          }
      }
  } else {
      return false;
  }
  return true;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  if (key1.length !== key2.length){
    return false;
  } else {
    for (const key of key1){
      // check whether object1.key and object2.key are all existing
      // cannot use "if (object1[key] && objects2[key])" to avoid when value is "0"
      if (object1[key] !== undefined && object2[key] !== undefined){
        // if both values are arrays, use eqArrays function
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
          if (eqArrays(object1[key], object2[key])){
            continue;
          } else {
            return false;
          }
        } else {
          // if just one value is array, another is other type, return false
          if (Array.isArray(object1[key]) || Array.isArray(object2[key])){
            return false;
          } else {
            if (object1[key] === object2[key]){
              continue;
            }
          }
        }
      } else {
        return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);
// => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
// => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);
// => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
// => false
// Array checks using simple === will always return false.

module.exports = eqObjects;