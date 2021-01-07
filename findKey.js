const findKey = function(obj, callback){
  for (const key in obj){
    if (callback(obj[key])){
      return key;
    }
  }
}

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

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
