function Sum(arr, n) {
    if (n <= 0) {
      return 0;
    }
  
    return arr[n - 1] + Sum(arr, n - 1);
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = 3;
const result = Sum(numbers, n);
console.log(result); 