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

const spaceEliminate = function(str){
  return str.split(" ").join("");
}

const countLetters = function(str){
  let output = {};
  for (const letter of str){
    if(output[letter]){
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }
  return output;
}

const result = countLetters(spaceEliminate("lighthouse in the house"));
assertEqual(result['l'], 1);
assertEqual(result['s'], 2);