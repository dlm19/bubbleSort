function swap (arr, first, second) {
  let temp = arr[first]
  arr[first] = arr[second]
  arr[second] = temp
}

function bubbleSort (array) {
  if (array.length === 1) {
    return array;
  } else {
    // the last index isn't sorted until the
    // i keeps track of where we are in the sort
    for (let i = 0; i < array.length; i++) {
      // subtract i from the array length/inner loop finishes running before
      // the first
      for (let j = 0; j < array.length - i; j++) {
        if (array[j] > array[j+1]) {
          swap(array, j, j+1)
        }
      }
    }
  }
  return array;
}
