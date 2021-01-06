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

const middle = function(array) {
  let output = [];
  const len = array.length;
  if (len > 2) {
    if (len % 2 === 1){
      output.push(array[(len - 1) / 2]);
    } else {
      output.push(array[(len / 2 - 1)]);
      output.push(array[(len / 2)]);
    }
  }
  return output;
}

assertArraysEqual(eqArrays(middle([1]), []), true);
assertArraysEqual(eqArrays(middle([1, 2]), []), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);

middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]