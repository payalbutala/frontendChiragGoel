// Named Function : works same as var hoisting, function hoisted at top
/* console.log(sum(1, 2)); // => 3 as sum function defination is hoisted.
function sum(a, b) {
  return a + b;
} */

// Anonymous Function
/* // console.log(total); // undefined as variable total is hoisted
// console.log(total(1, 2)); TypeError : total is not a function
var total = function (a, b) {
  return a + b;
};
console.log(total(1, 2)); // 3 */

/* function sum1(a, b) {
  return a + b;
}
console.log("Sum : ", sum1(1, 2)); // 3
console.log("Sum : ", sum1(3, 4)); // 7
console.log("Sum : ", sum1(3, 4, 5)); // 7 => 3rd value ignored

// OR use c = 0; to avoid NaN
function sum2(a, b, c) {
  return a + b + c;
}
console.log("Sum : ", sum2(1, 2)); // NaN as 3 values are expected
console.log("Sum : ", sum2(3, 4)); // NaN as 3 values are expected
console.log("Sum : ", sum2(3, 4, 5)); // 12 */

// ========= BEST SOLUTION Generic One : which works for any number of Arguments
function sumBestWay(...args) {
  console.log(arguments); // Special Object, can iterate thorugh but not an Array
  console.log(args); // Array
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log("Sum : ", sumBestWay(1, 2)); // 3
console.log("Sum : ", sumBestWay(3, 4)); // 7
console.log("Sum : ", sumBestWay(3, 4, 5)); // 12
