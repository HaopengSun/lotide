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

module.exports = middle;