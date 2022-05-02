for (let i = 1; i < arr.length; i++) {
  for (let j = i; j > 0; j--) {
    if (arr[minIndex] > arr[j]) {
      minIndex = j;
    }
  }
  // 스와프(swap)
  let temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
}

console.log(arr);
