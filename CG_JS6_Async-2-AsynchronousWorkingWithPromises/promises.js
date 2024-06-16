// create new instance -> Provides 1 callback -> Success/Fail = Resolve/Reject
// Creating Promise based on result
const batchPromise = new Promise(function (resolve, reject) {
  const passingScore = 95;
  const studentScore = 95;

  // to add delay
  setTimeout(function () {
    if (studentScore >= passingScore) {
      resolve("Yes, completed");
    } else {
      reject("Not, completed");
    }
  }, 5000);
});

// consume state
console.log("Start");

const p = batchPromise
  .then(function (data) {
    // Success
    console.log("Success: ", data);
    return data; // VIMPPPPPP - this data goes to next .then
  })
  .then(function (data) {
    console.log("to UpperCase: ", data.toUpperCase());
  })
  .catch(function (err) {
    console.log("Failure: ", err);
  });

console.log(p);
console.log("End");
