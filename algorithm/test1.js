
const miniMaxSum = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  const minSum = sortedArr.slice(0, 4).reduce((acc, curr) => acc + curr, 0);
  const maxSum = sortedArr.slice(1).reduce((acc, curr) => acc + curr, 0);
  console.log(minSum, maxSum);
}


miniMaxSum([1, 3, 5, 7, 9]);
miniMaxSum([1, 2, 5, 9, 2]);