// Cart: https://fakestoreapi.com/carts/user/2
// User: https://fakestoreapi.com/users/1

// Scenario : Fetch data for cart and user that we need to show in header

/* const cart = new Promise(function (resolve, reject) {
  const data = Promise.all([fetch("https://fakestoreapi.com/carts/user/2")]);
  if (data) {
    resolve(data);
  } else {
    reject("Error!");
  }
});

const res = cart
  .then(function (data) {
    console.log(data);
  })
  .catch(function (e) {
    console.log(e);
  });

console.log("----", res); */
/* 
async function headerDetails() {
  const userDetails = await fetch("https://fakestoreapi.com/carts/user/2");
  const cartDetails = await fetch("https://fakestoreapi.com/users/1");
  console.log(await userDetails.json(), await cartDetails.json());
}

headerDetails(); */

async function headerDetailsInParallel() {
  const data = await Promise.all([
    fetch("https://fakestoreapi.com/carts/user/2"),
    fetch("https://f555555akestoreapi.com/users/1"),
  ]);
  console.log(data);
}

headerDetailsInParallel();

async function headerDetailsInParallel() {
  const data = await Promise.any([
    fetch("https://fakestoreapi.com/carts/user/2"),
    fetch("https://f555555akestoreapi.com/users/1"),
  ]);
  console.log(data);
}

headerDetailsInParallel();
