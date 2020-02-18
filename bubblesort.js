function swap(input1, input2) {
  if (input1 === input2) {
    return 'you should not have two of the same number';
  }

  if (input1 > input2) {
    return [input2, input1];
  } else {
    return [input1, input2];
  }
}

function bubbleSort(array, finalArr = []) {
  if (array.length <= 1) {
    return array;
  } else if (array.length === 2) {
    finalArr.unshift(...array);
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      let swappedVals = swap(array[i], array[i + 1]);
      array.splice(i, 2, ...swappedVals);
    }
    let val = array.pop();
    finalArr.unshift(val);
    console.log(finalArr);
    bubbleSort(array, finalArr);
  }

  return finalArr;
}
