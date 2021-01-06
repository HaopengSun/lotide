// Our assertEqual function can only compare primitive values.
// We ran into this issue when comparing arrays and ended up implementing assertArraysEqual,
// if you recall. 
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

const countOnly = function(allItems, itemsToCount) {
  let output = {};
  for (var key in itemsToCount){
    if (itemsToCount[key]){
      for (var item of allItems){
        if (item == key){
          if (output[key]){
            output[key] += 1;
          } else {
            output[key] = 1;
          }
        }
      }
    }
  }
  return output;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, 
  { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);