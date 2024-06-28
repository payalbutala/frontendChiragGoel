// Example1
let Obj = { name: "Sample Object" };
console.log(Obj.toString()); // Object Object

// Set Prototype to null
Obj.__proto__ = null;
try {
  console.log(obj.toString());
} catch (e) {
  console.log("Error : ", e.message); // Error :  obj is not defined
}
