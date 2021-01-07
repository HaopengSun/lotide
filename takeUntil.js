const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)){
      return results;
    } else {
      results.push(item);
    }
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);