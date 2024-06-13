// Example 1:
/* console.log("A");

setTimeout(function () {
  console.log("B");
}, 1000);

console.log("C");

for (var i = 0; i < 3; i++) {
  console.log("D");
}

console.log("E");
 */
// ANS :  A C DDD E B

// Example 2:
/* console.log("A");

setTimeout(function () {
  console.log("B");
}, 1000);

["T", "T"].forEach(function (item) {
  console.log(item);
});

console.log("C");

for (var i = 0; i < 3; i++) {
  console.log("D");
}

console.log("E"); */

// ANS :  ATTCDDDEB

// Example 3:
/* console.log("A");

setTimeout(function () {
  console.log("B");
}, 2000);

console.log("C");

setTimeout(function () {
  console.log("D");
}, 1000);

console.log("E"); */

// ANS :  ACEDB (based on time)

// Example 4:
/* console.log("A");

setTimeout(function () {
  console.log("B");
}, 2000);

console.log("C");

setTimeout(function () {
  console.log("D");
}, 1000);

for (var i = 0; i < 10; i++) {
  console.log("E");
}

console.log(F); */

// ANS :  ACEEEEE.......FDB

// Example 5
/* function fn1() {
  fn2();
  console.log("C");
}

function fn2() {
  fn3();
  console.log("B");
}

function fn3() {
  console.log("A");
}

fn1();
 */
// ANS : ABC

// Example 6
/* function fn1() {
  console.log("C");
  fn2();
}

function fn2() {
  console.log("B");
  fn3();
}

function fn3() {
  console.log("A");
}

fn1();
console.log("D"); */

// ANS : CBAD
