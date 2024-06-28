// Example1

// Synchronous : Execute line by line, until for-loop completed it wont execute next console.
/*
console.log("1");
console.log("2");
console.log("3");

for (let i = 0; i < 3; i++) {
  console.log("4");
}

console.log("5");
*/

// 1234445

// Example2
/*console.log("1");
while (true) {
  console.log("2");
}
console.log("3"); // never execute
// 122222222222222222222.................... NEVER END
*/

// Example3
/*
console.log("1");

function getTotal() {
  console.log("2");
  return a + b;
}

function sum(a, b) {
  console.log("3");
  return getTotal(a, b);
}

sum(1, 2);
console.log("4");
// 1324
*/

//Example4
/*console.log("1");

setTimeout(function () {
  console.log("2");
});

setTimeout(function () {
  console.log("3");
}, 0);

for (var i = 0; i < 3; i++) {
  console.log("4");
}

console.log("5");
// 1444523
*/

//Example5
console.log("1");

setTimeout(function () {
  console.log("2");
}, 1000);

setTimeout(function () {
  console.log("3");
});

for (var i = 0; i < 3; i++) {
  console.log("4");
}

console.log("5");

setTimeout(function () {
  console.log("6");
}, 0);
// 14445362
