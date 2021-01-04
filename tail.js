const assertEqual = function(actual, expected) {
  // let correctMsg = `Assertion Passed: ${actual} === ${expected}`;
  let correctMsg = 'Assertion Passed: ' + actual + '===' + expected;
  let errorMsg = actual + '!==' + expected;
  console.assert(actual === expected, errorMsg);
  if (actual === expected) {
    console.log(correctMsg);
  }
};
const tail = function(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return [];
  } else {
    for (let i = 1; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
};
const words = ["Hello", "Lighthouse", "Labs"];
const result = tail(words);
// assertEqual(result, ["Lighthouse", "Labs"]); will always return false

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(words.length, 3);