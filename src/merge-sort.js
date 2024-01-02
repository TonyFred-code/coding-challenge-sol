function mergeSort(array) {
  const arrLen = array.length;
  if (arrLen === 1) {
    return array;
  }

  function merge(arrayOne, arrayTwo) {
    // return [...arrayOne, ...arrayTwo];
    let m = 0;
    let n = 0;
    let k = 0;
    const merged = [];

    const arrOneLen = arrayOne.length;
    const arrTwoLen = arrayTwo.length;

    while (m < arrOneLen && n < arrTwoLen) {

      if (arrayOne[m] < arrayTwo[n]) {
        merged[k] = arrayOne[m];
        m += 1;
      } else {
        merged[k] = arrayTwo[n];
        n += 1;
      }
      k += 1;
      console.log({merged});
    }

    for (; m < arrOneLen; m += 1) {
      const term = arrayOne[m];
      merged[k] = term;
      k += 1;
    }

    for (; n < arrTwoLen; n += 1) {
      const term = arrayTwo[n];
      merged[k] = term;
      k += 1;
    }

    console.log({
        merged,
        arrayOne,
        arrayTwo
    })
    return merged;
  }

  const mid = Math.floor(arrLen / 2);
  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid, arrLen);
  console.log({
    leftArray,
    rightArray,
  })
  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);
  const merged = merge(leftArray, rightArray);
  return merged;
}

const test1 = [3, 2, 1, 13, 8, 5, 0, 1];
const test2 = [105, 79, 100, 110];
const sorted1 = mergeSort(test1);
const sorted2 = mergeSort(test2);
// const answer1 = [0, 1, 1, 2, 3, 5, 8, 13];
// const answer2 = [79, 100, 105, 110];

console.log(sorted1);
console.log(sorted2);
