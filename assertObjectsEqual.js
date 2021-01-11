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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const correctMeg = `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const errorMeg = `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  if (eqObjects(actual, expected)){
    console.log(correctMeg);
  } else {
    console.log(errorMeg);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);

module.exports = assertObjectsEqual;
