const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++){
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i]) && arr1[i].length === arr2[i].length){
      if (!eqArrays(arr1[i], arr2[i])){
        return false;
      }
    } else {
      if (arr1[i] !== arr2[i]){
        return false;
      }
    }
  }
  return true;
}

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false