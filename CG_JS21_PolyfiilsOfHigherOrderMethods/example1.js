// Polyfill fopr forEach
/* 
let arr = [1, 2, 3, 4];
// o/p 2,4,6,8

arr.forEach(function (item, index) {
  arr[index] = item * 2;
});

console.log(arr); 

let arr = [1, 2, 3, 4];

Array.prototype.myForEach = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callback(arr[i]);
  }
  return arr;
};

console.log(arr.myForEach(arr, (arr) => arr * 2));
*/

/* let numbers = [1, 2, 3, 4];

const obj = {
  name: "forEach",
  multiplier: 2,
  multiply: function (element) {
    console.log(element * this.multiplier);
  },
};

numbers.forEach(function (ele, index, arr) {
  this.multiply(ele);
}, obj);

// Iterate thorugh all items and execute the call

Array.prototype.forEach = function (callback, thisArgs) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    callback.call(thisArgs, arr[i], i, arr);
  }
}; */

// polyfill for map

// 1,2,3,4 -> 2,4,6,8
let numbers = [1, 2, 3, 4];
/* let result = [];
numbers.map(function (item) {
  result.push(item * 2);
});
console.log(result); */

// polyfill
Array.prototype.myMap = function (callback, thisArgs) {
  let arr = this;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback.call(thisArgs, arr[i]));
  }
  return result;
};

console.log(numbers.myMap((numbers) => numbers * 2));
