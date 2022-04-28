let arr = [3, 7, 1, 5, 2, 4, 9, 0, 8, 6];
for (let i = 0; i < arr.length; i++) {
  let minIndex = i; // 가장 작은 원소의 인덱스
  for (let j = i + 1; j < arr.length; j++) {
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
