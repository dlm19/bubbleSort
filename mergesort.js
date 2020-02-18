function split(array) {
  let half = Math.floor(array.length / 2);
  let first = array.slice(0, half);
  let second = array.slice(half, array.length);

  return [first, second];
}

function merge(arrayOne, arrayTwo) {
  let arrayThree = [];

  let i = 0;
  let j = 0;

  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] < arrayTwo[j]) {
      arrayThree.push(arrayOne[i]);
      i++;
    } else {
      arrayThree.push(arrayTwo[j]);
      j++;
    }
  }

  for (; i < arrayOne.length; i++) arrayThree.push(arrayOne[i]);
  for (; j < arrayTwo.length; j++) arrayThree.push(arrayTwo[j]);

  return arrayThree;
}

function mergeSort(array, sortedArray = []) {
  if (array.length <= 1) {
    return array;
  } else {
  }
}
