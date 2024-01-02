function mergeSort(array) {
    const arrLen = array.length;
  if (arrLen === 1) {
    return array;
  }

  function merge(arrayOne, arrayTwo) {
    return [...arrayOne, ...arrayTwo];
  }


  const mid = Math.floor(arrLen / 2);
  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid, arrLen);
  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);
  const merged = merge(leftArray, rightArray);
  return merged;
}

const test1 = [3, 2, 1, 13, 8, 5, 0, 1];
const test2 = [105, 79, 100, 110];
const sorted1 = mergeSort(test1);
const sorted2 = mergeSort(test2);

console.log(sorted1); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(sorted2); // [79, 100, 105, 110]
