/* var arr = [1, 2, 3, 4, 5];

function imparativeFunction() {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(imparativeFunction());

function declarativeFunction() {
  var sum = 0;
  // forEach - for Array and doesn't return anything, callback
  arr.forEach(function (item, i) {
    sum += item;
  });
  return sum;
}

console.log(declarativeFunction());

// arrow Function
var sum = (a, b) => {
  return a + b;
};
console.log(sum(10, 20));
 */

/* // i/p
var arr2 = ["apple", "banana", "mango"];
// o/p = ["APPLE", "BANANA", "MAGO"];

function convertToUpperCase() {
  arr2.forEach(function (item, i) {
    arr2[i] = item.toUpperCase();
  });
}
convertToUpperCase();
console.log(arr2);*/

/* // map function : returns new array of same length with modified values
function upperCaseDeclarative() {
  var result = arr2.map(function (item) {
    return item.toUpperCase();
  });
  console.log(result);
  return result;
}

upperCaseDeclarative();

var num = [1, 2, 3, 4];

function multiplyDeclarative() {
  var resultNum = num.map(function (no) {
    return no * 2;
  });
  console.log(resultNum);
}

multiplyDeclarative(); */

/* // filter : o/p array length different, new array as o/p, few values from original array as output with some condition

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// o/p [2, 4, 6, 8]

function filterEvenValues() {
  var filterNum = arr2.filter(function (item) {
    return item % 2 == 0;
  });
  console.log(filterNum);
  return filterNum;
}
filterEvenValues(); */

/* MAP & filter
BOTH RETURNS NEW Array. 
MAP ARRAY SIZE IS SAME AS INPUT ARRAY SIZE. */

/* reduce :  combine/convert/aggregation/transformation

var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumDeclarative() {
  var res = arr3.reduce(function (accumulator, item) {
    accumulator += item;
    return accumulator; // it takes accumulator as next input
  }, 0); // 0 is inititial value for sum
  console.log(res);
}

sumDeclarative();

var strArray = ["My", "Name", "is", "Chirag"];

function concatArray() {
  var ans = strArray.reduce(function (accumulator, item) {
    accumulator = accumulator + " " + item;
    return accumulator;
  }, "");
  console.log(ans);
}

concatArray(); */
