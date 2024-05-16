// Passing as reference : internally its poining to same memory location
// impure function : has imact on obj1, its value gets impatced & updtaed outside function

/* function sum(ob1, ob2) {
  //   console.log(typeof ob1); // object - pass as refernce
  ob1.value = 500;
  return ob1.value + ob2.value;
}

var obj1 = {
  value: 200,
};

var obj2 = {
  value: 300,
};

console.log(
  "This is copy of obj1 so original obj won't impacted",
  sum({ ...obj1 }, { ...obj2 }) // 800
);
console.log(obj1.value); // 200

console.log(sum(obj1, obj2)); // 800
console.log("obj1 val", obj1.value); // 500
console.log("obj1 val", obj1.value); // 500 */

// Passing as values

// Pure function : it doesn't have impact outside function
/* function total(obj3Value, obj4Value) {
  console.log(typeof obj3Value); // number
  return obj3Value + obj4Value;
}

var obj3 = {
  value: 200,
};

var obj4 = {
  value: 300,
};

console.log(total(obj3.value, obj4.value));

var fnAsValue = function (fn) {
  var result = fn(5, 6);
  console.log(result);
};

fnAsValue(total); // passing function total as an argument to another function. */

/* FUNCTION CAN STORE IN VARIABLE, PASS AS AN ARGUMENT, RETURN FUNCITON INSIDE ANOTHER FUNCTION.

var fnAsReturnValue = function () {
  return function () {
    console.log("Returned Function");
  };
};

console.log(typeof fnAsReturnValue()); // function
console.log(fnAsReturnValue()); // returns inner function

var innerFn = fnAsReturnValue();
console.log(typeof innerFn); // function
innerFn(); // Returned Function
 */
// -- FUNCTION CAN STORE IN VARIABLE, PASS AS AN ARGUMENT, RETURN FUNCITON INSIDE ANOTHER FUNCTION.
