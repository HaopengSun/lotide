const assertEqual = function(actual, expected) {
  // let correctMsg = `Assertion Passed: ${actual} === ${expected}`;
  let correctMsg = 'Assertion Passed: ' + actual + '===' + expected;
  let errorMsg = actual + '!==' + expected;
  console.assert(actual === expected, errorMsg);
  if (actual === expected) {
    console.log(correctMsg);
  }
};

const head = function(arr){
  if (arr.length === 0){
    return [];
  } else {
      return arr[0];
  }
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");