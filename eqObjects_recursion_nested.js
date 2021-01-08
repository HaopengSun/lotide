const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  if (key1.length !== key2.length){
    return false;
  }
  for (const key in object1){
    if(typeof object1[key] === 'object' && object1[key] !== null){
      if (!eqObjects(object1[key], object2[key])){
        return false;
      }
    } else {
      if (object1[key] !== object2[key]){
        return false;
      }
    }
  }
  return true;
};

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false