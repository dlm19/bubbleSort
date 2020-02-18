function split(array) {
  let half = Math.floor(array.length / 2);
  let first = array.slice(0, half);
  let second = array.slice(half, array.length);

  return [first, second];
}

function merge(arrayOne, arrayTwo) {
  let arrayThree = arrayOne.concat(arrayTwo);
  return arrayThree;
}

function mergeSort(array, sortedArray = []) {
  if (array.length <= 1) {
    return array;
  } else {
    //   let splitArray = split(array);
    //   let splitAgain = splitArray.map(el => {
    //     if (el.length !== 1) {
    //       return split(el);
    //     } else return el;
    //   });
    //   let flatArr = splitAgain.flat();
    //   for (let i = 0; i < flatArr.length; i++) {
    //     let flatGuy = merge(flatArr[i], flatArr[i+1])
    //     sortedArray.unshift(flatGuy)
    //     i++
    //   }
    // }
    // return sortedArray.flat()
    array = split(array);
    mergeSort(array);
    console.log(array);
  }
}
