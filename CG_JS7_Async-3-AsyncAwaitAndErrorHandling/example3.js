const list = [
  {
    id: 1,
    title: "Product 1",
    description: "Awesome Product",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Awesome Product",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Awesome Product",
  },
];

// A function to take (delay, limit).
// which return data with limit
// in case limit > 3, through error
// Output : Product 1, Product 2

const myFetch = function (delay, limit) {
  // code goes here
  return new Promise(function (resolve, reject) {
    // let ans = [];

    setTimeout(function () {
      if (limit <= list.length) {
        // for (let i = 0; i < limit; i++) {
        //   ans.push(list[i]);
        // }
        const data = list.slice(0, limit);
        resolve(data);
      } else {
        reject("Out of Limit!");
      }
    }, delay);
  });
};

// Way1 Prmise Chaining
/* myFetch(3000, 4)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
 */

// Way2  ES6 - async/await
/* async function fetchListData() {
  try {
    const data = await myFetch(3000, 4);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

fetchListData(); */

// Example3 :
// Fetch below data in sequence;
// myFetch(3000, 3);
// myFetch(1000, 1);
// myFetch(2000, 2);

// Way1 Using Chaning
/* myFetch(3000, 3)
  .then((data) => {
    console.log("data1", data);
    return myFetch(1000, 1);
  })
  .then((data) => {
    console.log("data2", data);
    return myFetch(2000, 2);
  })
  .then((data) => {
    console.log("data3", data);
  })
  .catch(() => {
    console.log(e);
  }); */

// Way2 ES6
/* async function fetchListData() {
  try {
    const data1 = await myFetch(3000, 3);
    console.log(data1);

    const data2 = await myFetch(1000, 1);
    console.log(data2);

    const data3 = await myFetch(2000, 2);
    console.log(data3);
  } catch (e) {
    console.log(e);
  }
}

fetchListData(); */

// Example4 :
// Fetch below data in parallel + Terminate ASAP
// myFetch(3000, 3);
// myFetch(1000, 1);
// myFetch(2000, 2);

/* Promise.all([myFetch(3000, 3), myFetch(1000, 1), myFetch(2000, 2)])
  .then((data) => {
    console.log(data); // array of results as its a response of all 3 calls.
  })
  .catch((e) => {
    console.log(e);
  });
// output for Success
[
  [
    { id: 1, title: "Product 1", description: "Awesome Product" },
    { id: 2, title: "Product 2", description: "Awesome Product" },
    { id: 3, title: "Product 3", description: "Awesome Product" },
  ],
  [{ id: 1, title: "Product 1", description: "Awesome Product" }],
  [
    { id: 1, title: "Product 1", description: "Awesome Product" },
    { id: 2, title: "Product 2", description: "Awesome Product" },
  ],
];

// output for Failure
Out of Limit!
*/

// Example5 :
// Fetch below data in parallel + Don't Terminate
// myFetch(3000, 3);
// myFetch(1000, 1);
// myFetch(2000, 2);

/* Promise.allSettled([myFetch(3000, 3), myFetch(1000, 5), myFetch(2000, 2)]).then(
  (data) => {
    console.log(data); // array of results as its a response of all 3 calls.
  }
);
 */

// Example6
// Fetch below data in parallel + return result ASAP
// myFetch(3000, 3);
// myFetch(1000, 1);
// myFetch(2000, 2);
/* Promise.race([myFetch(10000, 3), myFetch(4000, 12), myFetch(5000, 1)])
  .then((data) => {
    console.log(data); // array of results as its a response of all 3 calls.
  })
  .catch((e) => {
    console.log(e);
  }); */

// Example7
// Fetch below data in parallel + return any success
// myFetch(3000, 3);
// myFetch(1000, 1);
// myFetch(2000, 2);
/* Promise.any([myFetch(10000, 3), myFetch(4000, 12), myFetch(4000, 1)])
  .then((data) => {
    console.log(data); // array of results as its a response of all 3 calls.
  })
  .catch((e) => {
    console.log(e);
  }); */
