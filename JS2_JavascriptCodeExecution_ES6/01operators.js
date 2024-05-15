// Arithmetic Operator : +, -, /, *, %, ++, --

/* var count = 0;
count = count + 1;
console.log(count);
count = count - 1;
console.log(count);

var price = 100;
var prodCount = 5;
var totalPrice = price * prodCount;
totalPrice = totalPrice + 25;
console.log(totalPrice);

console.log(totalPrice - [totalPrice * 0.35]);

console.log("mod : ", 5 % 2); */

// Assignment Operator : =, +=, -=, *=, /=, %=

/* console.log(++count);
console.log((count += 2)); */

// Comparison Operator ==, ===, >=, <=, >, <, !=, !==
/* console.log("1 == 1 =>", 1 == 1);

console.log("true == true =>", true == true);
console.log("true == 1 => ", true == 1);
console.log('"true" == 1 => ', "true" == 1); // false

console.log('true == "true" =>', true == "true"); // false
console.log('"true" == true =>', "true" == true); // false

console.log('"true" == "true" =>', "true" == "true");

console.log('false == "false" =>', false == "false");
console.log('0 == "false" =>', 0 == "false"); */

// Conditional Operator : Ternary OR if-else : ?
/* var cartQuantity = 0;
if (cartQuantity) {
  console.log("Widget 1");
} else {
  console.log("Widget 2"); // answer as 0 is falsey value.
}

if (cartQuantity > 0) {
  console.log("Widget 1");
} else {
  console.log("Widget 2"); // answer
}
console.log(cartQuantity > 0 ? "one" : "two");

cartQuantity = 20;
if (cartQuantity > 0) {
  console.log("Widget 1"); // answer as this condition is true it will skip other conditions // terminates
} else if (cartQuantity > 10) {
  console.log("Widget 2");
} else {
  console.log("Widget 3");
}
 */

// Switch case
/* var cartQuantity = 20;
switch (cartQuantity) {
  case 0: {
    console.log("Widget 1");
    // break;
  }
  case 20: {
    console.log("Widget 2");
    // return;
  }
  default: {
    console.log("Widget 3");
  }
} */

// TypeOf Operator : datatype automatically change as per value assigned
/* var n = 1;
console.log(typeof n); // number

var n = false;
console.log(typeof n); // boolean

n = "Pavi";
console.log(typeof n); // string */

// Logical Operator : &&, || : && => DADAJI : Retruns 1st FALSY value OR Last Truty Value
/* console.log(true && true); // true
console.log(false && false); // false
console.log(true && false); // false
console.log(false && true); // false
console.log(true && 1); //1
console.log(true && "Payal"); // Payal
console.log(true && 0); // 0
console.log(true && 0 && "Payal"); //0 */

// || => DADIJI : Retruns 1st Truty value OR Last Falsy Value
/* console.log("----------- || 0--------------");
console.log(true || true); // true
console.log(false || false); // false
console.log(true || false); // true
console.log(false || true); // true
console.log(true || 1); //true
console.log(true || "Payal"); // true
console.log("Payal" || true); // Payal
console.log(true || 0); // true
console.log(true || 0 || "Payal"); //true
console.log(false || 0 || "" || "Payal" || true || 1); // Payal
console.log(false || 0); // 0
console.log(0 || false); // false */

// Query - not yet clear
/* console.log(1 && console.log("Hello")); // Hello -> both true with && so followed DADAJI rule.
console.log(console.log("Hello") && 1); // Hello -> both true with && so followed DADAJI rule.

var as = 1 && console.log("Hello1");
console.log("output", as); */

console.log("true" == true); // false
console.log("false" == false); // false
