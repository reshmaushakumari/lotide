
const middle = function(array) {
  let newArray = [];
  let index = 0;
  if (array.length <= 2) {
    return newArray;
  } else {
    if (array.length % 2 !== 0) {
      index = array.length / 2;
      newArray.push(array[Math.floor(index)]);
    } else {
      index = array.length / 2;
      newArray.push(array[index - 1]);
      newArray.push(array[index]);
    }
    return newArray;
  }
};

module.exports = middle;
