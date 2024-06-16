// Example1
/*var x = 1,
  y = 2;

function sum(a, b) {
  return a + b;
}

console.log(sum(x, y)); //3
*/

// Example2
/*var z = [1, 2];

function total(arr) {
  return arr[0] + arr[1];
}

console.log(total(z)); //3
*/

// Example3
/*var z = [1, 2];

function total(arr) {
  return arr[0] + arr[1];
}

z[0] = 10;
console.log(total(z)); //12
*/

// Example4
/*var x = 1,
  y = 2;

function sum(a, b) { // Pure function - always o/p 12, same output.
  a = 10;
  return a + b;
}

console.log(sum(x, y)); //12
console.log(sum(x, y)); //12
console.log(sum(x, y)); //12
console.log(sum(x, y)); //12
console.log(sum(x, y)); //12
console.log(sum(x, y)); //12
console.log(x, y); //1,2
*/

// Example5
/*
var z = [1, 2];

function total(arr) {
  arr[0] = 10;
  return arr[0] + arr[1];
}

console.log(total(z)); //12
console.log(z); //10,2
*/

// Example6
/*let count = 0;
function counter() {
  count++;
  return count;
}

// Impure Function - always different o/p. IF argument is NON-PRIMITIVE data type its impure function.
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3
console.log(counter()); //4
*/

// Example7
/*function compute(fn, a, b) {
  return fn(a, b);
}

function sum(x, y) {
  return x + y;
}

function subtract(x, y) {
  return y - x;
}

// PASSING FUNCTION AS ARGUMENT : SUM IS PASSING FUNCTION AS ARGUMENT
console.log(compute(sum, 2, 3)); //5
console.log(compute(subtract, 2, 3)); //1
*/

// Example8

/*
function x(a) {
  return function (b) {
    return a + b;
  };
}

// Function can return another function
console.log(x(1)(2));
*/
