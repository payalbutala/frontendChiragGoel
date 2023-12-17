// Hoisting : Declaration of var is moved to top of it.
/* 
console.log(a, b); // 10, undefined
var a = 10;
var b = 20;

// after hoisting converted as

var a, b;
console.log(a, b); // 10, undefined
a = 10;
b = 20;
*/

// Example 2
/* var a;
a = 10;
console.log(a, b); // 10, undefined
var b;
b = 20;

// after hoisting converted as

var a;
a = 10;
var b;
console.log(a, b);
b = 20;
 */

// Example 3
console.log(a, b); // ReferenceError: a is not defined.
a = 10;
var b = 20;

// after hoisting converted as
