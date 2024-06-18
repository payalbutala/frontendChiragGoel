// create new instance -> Provides 1 callback -> Success/Fail = Resolve/Reject
// Creating Promise based on result
const batchPromise = new Promise(function (resolve, reject) {
  const passingScore = 95;
  const studentScore = 99;

  // to add delay
  setTimeout(function () {
    if (studentScore >= passingScore) {
      resolve("Yes, completed");
    } else {
      reject("Not, completed");
    }
  }, 5000);
});

// consumtion state
console.log("Start");
// Way1

/* const p = batchPromise
  .then(function (data) {
    // Success
    console.log("Success: ", data);
    return data; // VIMPPPPPP - this data goes to next .then
  })
  .then(function (data) {
    console.log("to UpperCase: ", data.toUpperCase());
  })
  .catch(function (err) {
    // Failure
    console.log("Failure: ", err);
  });

console.log(p);
console.log("End"); */

// ES6 -> EcmaScript

//way2
async function getBatchData() {
  try {
    const data = await batchPromise; // MUST WRAPPED WITH FUNCTION - ASYNC
    console.log("Uppercase: ", data.toUpperCase());
  } catch (e) {
    console.log("Failure: ", e);
  }
}
