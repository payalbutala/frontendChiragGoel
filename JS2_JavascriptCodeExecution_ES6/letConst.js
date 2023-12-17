/// let : No concept of Hoisting, let scope start where is declared till end of function.

/* console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10; */

/* let b;
console.log(b); // undefined
b = 20; */

/* let b = 10;
console.log(b); // 10
console.log("Hi!"); // Hi!
console.log(a); // Reference Error : a is not defined */

// Const : works same as let. Declaration & Initialization at same line. Value can not change.
/* console.log(aa); // ReferenceError: Cannot access 'aa' before initialization
const aa = 10;

const ab; // SyntaxError: Missing initializer in const declaration
ab = 10;
console.log(ab); */
