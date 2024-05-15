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
/* console.log(a, b); // 
a = 10; // ********* ANYTHING WHICH IS NOT DECLARED AS VAR WILL MOVE TO GLOBAL SCOPE : IN NON-STRICT MODE.
NOW A DAYS ALL UPDTAED BROWSERS ARE RUN IN STRICT MODE SO ERROR : uncaught reference error, a is not defined. 
var b = 20; */

// after hoisting converted as
/* var a;
var b;
console.log(a, b); // undefined, undefined
a = 10;
b = 20; */

// Example 4
/* 
console.log(a); // ReferenceError: a is not defined
function inner() {
  console.log(a, b); // ReferenceError: a is not defined
  a = 10;
  var b = 20;
}
console.log(a); //ReferenceError: a is not defined
inner(); */

// Example 5
/* console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 20; */

// Example 6
/* let b = 10;
console.log(b);
console.log("Hiii");
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 20;
console.log(c); // ReferenceError: c is not defined */

// Example 7 : const behaves same as let, value can't change after initialization.
/* console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 10;
const v; //SyntaxError: Missing initializer in const declaration  
v = 20; */
