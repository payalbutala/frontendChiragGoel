let a = [1, 2, 3, 4];
let b = [2, 3, 4, 5, 6];

//polyfill for map
Array.prototype.myMap = function (callback) {
  const arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
};

console.log(a.myMap((item) => item * 2));
console.log(b.myMap((item) => item * 2));

// polyfill for filter
Array.prototype.myFilter = function (callback) {
  let newArr = [];
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(a.myFilter((item) => item % 2 === 0));

// polyfill for reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let ans = initialValue;
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    ans = callback(ans, arr[i]);
  }
  return ans;
};

const sum = a.myReduce(function (acc, item) {
  return acc + item;
}, 0);

console.log(sum);

// sum of array a = [1,2,3,4]
/* const sum = a.reduce(function (acc, item) {
  return acc + item;
}, 0);
a.red(funcv, initi);
console.log(sum);
 */

let arr = [
  { type: "Credit", value: 100 },
  { type: "Debit", value: 400 },
  { type: "Credit", value: 300 },
];

let ans = {
  Credit: [
    { type: "Credit", value: 100 },
    { type: "Credit", value: 300 },
  ],
  Debit: [{ type: "Debit", value: 400 }],
};

let obj = {};
for (let i = 0; i < arr.length; i++) {
  if (!(arr[i].type in obj)) {
    obj[arr[i].type] = [];
  }
  obj[arr[i].type].push(arr[i]);
}

console.log(obj);
