console.log(x, y); // undefined, undefined

var x = 100,
  y = 200;

console.log(sum(x, y)); // 300

function sum(a, b) {
  total = a + b;
  return a + b;
}

console.log(total); //300 -> total is not declared so its in global scope.

/* 1. Execution Context Created
2. hoisting
3. Execution Starts Line-by-Line */

// Code Converted into:
var x, y;

function sum(a, b) {
  total = a + b;
  return a + b;
}

console.log(x, y); // undefined, undefined

(x = 100), (y = 200);

console.log(sum(x, y)); // 300

console.log(total); //300 -> total is not declared so its in global scope.
