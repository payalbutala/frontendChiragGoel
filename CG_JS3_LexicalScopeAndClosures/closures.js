// Closures :

// Example1
/* function global(a) {
  var g = "g";
  function outer(b) {
    var o = "o";
    function inner(c) {
      var i = "i";
    }
  }
} */

// Example2
/*function x() {
  var outer = "outer";
  return function () {
    console.log(outer);
  };
}

const innerFn = x(); // it will return function () { console.log(outer); };
console.log(inner); // it will print function () { console.log(outer); };
console.log(innerFn()); // print "outer"
*/

// Example3
/*function x(a) {
  function y(b) {
    return a + b;
  }
  return y;
}

const innerFn = x(1);
console.log(innerFn); // ƒunction y(b) { return a + b;}
console.log(innerFn(2)); // 1+3 => output => 3
*/

// Example4
/* console.log(multiply(1)(2)(3));

function multiply(a) {
  function m1(b) {
    function m2(c) {
      return a * b * c;
    }
    return m2;
  }
  return m1;
}
*/

// Example5 MEMOZATION
/*function memoization(x) {
  // code goes here
  return function (y) {
    return x + y;
  };
}

const sum10 = memoization(10);
console.log(sum10(1)); //11
console.log(sum10(2)); //12
console.log(sum10(3)); //13

const sum15 = memoization(15);
console.log(sum10(1)); //16
console.log(sum10(2)); //17
console.log(sum10(3)); //18
*/

function counter(x) {
  // code goes here
  return function () {
    return ++x;
  };
}

const counterInc = counter(10);
console.log(counterInc()); //11
console.log(counterInc()); //12
console.log(counterInc()); //13
console.log(counterInc()); //14
