console.log("A");

setTimeout(function () {
  console.log("B");
}, 1000);

setTimeout(function () {
  console.log("C");
});

// PROMISES GOES TO MICROTASK QUEUE IN EXECUTION CONTEXT WHICH IS LIKE VIP - GETS EXECUTE BEFORE TASK QUEUE(SETTIMEOUT)
Promise.resolve().then(() => console.log("D"));

console.log("E");
