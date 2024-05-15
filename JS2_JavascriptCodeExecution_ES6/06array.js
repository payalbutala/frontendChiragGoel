let arr = ["zero", 2, 3];
let arr1 = arr;
delete arr[1];
console.log(arr); // delete 1st index element but array length is same.

arr.splice(1, 1); // deleteCount, index -> 1 element, 1st index
console.log(arr); // remove index element, reduces array size, new reference created.

arr[0] = 0;
console.log(arr); // Reference Array impacted output in both arr & arr1
console.log(arr1); // Reference Array impacted output in both arr & arr1

// Created New Copy of Array without reference using slice() & (...)
let arr2 = arr.slice();
arr.push(4);
console.log(arr);
console.log(arr2); // new copy

let arr3 = [...arr2];
arr2.push(5);
console.log(arr2);
console.log(arr3); // new copy

var [first, second, third, ...rest] = [1, 2, 3, 4, 5, 6, 7];
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(rest); // [4, 5, 6, 7] all other elements in new array

var [...rest1] = [11, 12, 13, 14, 15, 16, 17];
console.log(rest1); // [11, 12, 13, 14, 15, 16, 17] all elements in new array
