const assertEqual = function(actual, expected) {
  // let correctMsg = `Assertion Passed: ${actual} === ${expected}`;
  let correctMsg = 'Assertion Passed: ' + actual + '===' + expected;
  let errorMsg = 'Assertion Failed: ' + actual + '!==' + expected;
  // console.assert(actual === expected, errorMsg);
  if (actual === expected) {
    console.log(correctMsg);
  } else {
    console.log(errorMsg);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);