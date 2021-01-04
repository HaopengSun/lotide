const assertEqual = function(actual, expected) {
  let correctMsg = 'Assertion Passed: ' + actual + '===' + expected;
  let errorMsg = actual + '!==' + expected;
  console.assert(actual === expected, errorMsg);
  if (actual === expected) {
    console.log(correctMsg);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);