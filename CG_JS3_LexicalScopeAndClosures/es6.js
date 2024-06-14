// Example1
/*
function sum(a, b=0) {
  return a + b;
}

console.log(sum(1)); // NaN if we won't pass b=0 and only pass (a,b);
console.log(sum(1)); // 3
*/

// Example2
/*var arr1 = [1, 2, 3];
var arr2 = arr1;

arr2[0] = 10;
console.log(arr1, arr2); // [10,2,3] [10,2,3] // Pass By Reference
*/

// Example3 - Avoid arr1 to be changed
var arr1 = [1, 2, 3];
var arr2 = arr1.slice();
var arr3 = [...arr1];

arr2[0] = 10;
console.log(arr1, arr2, arr3); // [1,2,3] [10,2,3] [1,2,3] // Pass By Reference
