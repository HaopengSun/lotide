const assertArraysEqual = function(arr1, arr2){
  let output = true;
  if (arr1.length === arr2.length){
      for (let i = 0; i < arr1.length; i++){
          if (arr1[i] === arr2[i]){
              continue;
          } else {
              output = false;
          }
      }
  } else {
      output = false;
  }
  if (output){
      console.log('These two arrays are equal!');
  } else {
      console.log('These two arrays are not equal!');
  }
}

const spaceEliminate = function(str){
  return str.split(" ").join("");
}

const letterPositions = function(sentence) {
  const results = {};
  spaceEliminate(sentence);
  for (let i = 0; i < sentence.length; i++){
    if (results[sentence[i]]){
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

const result = letterPositions("lighthouse in the house");
assertArraysEqual(result.h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions("hello").e, [1]);