// Example1
/* function sum(a, b) {
  var total = a + b;
  return total;
}

const result = sum(1, 2);
console.log(result); // 3 */

// Example2
// Name Function Hoistng -> It gets hoisted
/* var result = sum(1, 2);
console.log(result); // 3

function sum(a, b) {
  var total = a + b;
  return total;
}

// After Hoisting with Name Function Converts to
var result;
// Name Function Hoistng -> It gets hoisted
function sum(a, b) {
  var total = a + b;
  return total;
}
result = sum(1, 2);
console.log(result); // 3 */

// Example3
/* // Anonymous Function Hoistng -> It doesn't gets hoisted
var result = sum(1, 2);
console.log(result);

// Anonymous Function
var sum = function (a, b) {
  var total = a + b;
  return total;
};

// After Hoisting with Anonymous Function Converts to
var result;
var sum;
result = sum(1, 2); // error - sum is not a function
console.log(result); // undefined
sum = function (a, b) {
  var total = a + b;
  return total;
}; */

// Example4
/* function sum(a, b) {
  total = a + b;
  return total;
}

var result = sum(1, 2);
console.log(result, total); // 3, 3 (total is global variable)
 */

// Example5
/* function sum(a, b) {
  let total = a + b;
  return total;
}

console.log(result, sum); // error, error
let result = sum(1, 2); */

// Example6
let result = sum(1, 2);
console.log(result); // error : sum is not defined.

let sum = function (a, b) {
  var total = a + b;
  return total;
};
