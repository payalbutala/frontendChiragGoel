// Example1
/* let arr = [1, 2, 3, 4, 5];

function sum(arr1) {
   IMPERATIVE CODE
     let total = 0;
    for (let i = 0; i < arr1.length; i++) {
      total = total + arr1[i];
    }
    return total;
  
  code goes here using REDUCE
    let res = 0;
    res = arr1.reduce(function (acc, num) {
      return acc + num;
    }, res);
    return res;
  
  code goes here using FOREACH : DECLARATIVE CODE : NO NEED TO DEFINE -> START INDEX, WHERE TO END, HOW MUCH TO INCREMENT
    let total = 0;
    arr1.forEach(function (num, i) {
        total = total + arr1[i];
    });
    return total;
}

console.log(sum(arr));
 */

// Example2
/* let arr = [1, 2, 3, 4, 5];

Example2
USING FOREACH
function double(arr1) {
  // code goes here
  let res = [];
  arr.forEach(function (num, i) {
    res.push(2 * num);
  });
  return res;
}

console.log(double(arr)); // [2,4,6,8,10]

USING MAP - 1. RETURNS SAME ARRAY OF SAME SIZE AS INPUT, 2.RETURNS SAME ARRAY.
function double(arr1) {
  // code goes here
  const res = arr1.map(function (num, index) {
    return num * 2;
  });
  return res;
}

console.log(double(arr));
*/

// Example3
/* let arr2 = ["abc", "por", "ght", "uyt", "lki"];

function upperCase(arr2) {
  return arr2.map(function (ele) {
    return ele.toUpperCase();
  });
}

console.log(upperCase(arr2)); */

// Example4 : FILTER : RETURNS A NEW ARRAY WITH SUBSET OF INPUT ARRAY, FINAL OUTCOME SHOULD BE TRUE, WHICH WILL BE PART OF RESULT SUBSET ARRAY.
/*let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

function filterEvenNumbers(arr3) {
  return arr3.filter(function (arr3) {
    return arr3 % 2 === 0;
  });
}

console.log(filterEvenNumbers(arr3));
*/

// Example5

/*let arr4 = [-1, 2, -3, 4, -5, 6, 7, -8];

function getpositiveNumbers(arr) {
  // code goes here
  return arr4.filter(function (num) {
    return num > 0;
  });
}

console.log(getpositiveNumbers(arr4));
*/

// Example6
// REDUCE (1. ACCUMULATION, 2. TRANSFORMATION): reduce(fn, initial_value) -> in fn(TOTAL_ACCUMULATED_VALUE, ITEM, INDEX)
/* let arr5 = [{ amount: 100 }, { amount: 200 }, { amount: 500 }, { amount: 700 }];

function accountSummary(arr) {
  // code goes here
  let tot = 0;
  return arr5.reduce(function (tot, ele) {
    return tot + ele["amount"];
  }, 0);
}

console.log(accountSummary(arr5)); */

// Example 7
const letters = ["P", "A", "Y", "A", "L", "V", "I", "S", "H", "A", "L"];

function combineLetters(arr) {
  // CODE goes here
  const result = arr.reduce(function (acc, item, index) {
    return acc + item;
  }, "");

  return result;
}

console.log(combineLetters(letters)); // PAYALVISHAL
