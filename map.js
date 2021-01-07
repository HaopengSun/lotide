const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  // for (let item of array) {
  //   console.log('item BEFORE: ', item);
  //   console.log('item AFTER: ', callback(item));
  //   console.log('---');
  // }
  // return results;
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])