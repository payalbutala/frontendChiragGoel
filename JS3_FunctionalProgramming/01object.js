// Object

/* var obj = {
  name: "Payal Vishal",
  dob: "15/04/1988",
  age: 36,
  isMarried: true,
  techStacks: ["JS", "React", "Node", "GrpahQl"],
  address: {
    pincode: 400706,
    city: "Nerul Navi Mumbai",
  },
}; */

// Read Object
/* console.log(obj["name"]);
console.log(obj.name); */

// Update Object Values
/* obj.name = "Payal-Vishal Butala-Nair";
console.log(obj.name); */

// Create
// Difference -> 1. if key has space can't use .key, 2. dynamic key can be added
/* obj["school name"] = "MGM";
console.log(obj); */
// obj.school address = "Nerul"; // invalid

/* var sal = "salary";
obj[sal] = "xxxxxxx";
console.log(obj); */

// Delete
/* delete obj[sal];
delete obj["salary"];
delete obj.address;
console.log(obj); */

//

// Example 1
/* var eg1 = {
  name: "Payal Vishal",
  dob: "15/04/1988",
  age: 36,
  isMarried: true,
  techStacks: ["JS", "React", "Node", "GrpahQl"],
  address: {
    pincode: 400706,
    city: "Nerul Navi Mumbai",
  },
  greet: function () {
    console.log("Hi, from Payal Butala!");
    return "Hahahahah";
  },
};

// 1. Read Address
console.log(eg1.address);
// 2. Read techStacks
console.log(eg1.techStacks);
// 3. Read greet & execute
console.log(eg1.greet());
// 4. Read pincode
console.log(eg1.address.pincode);
// 5. Update city to Mumbai
eg1.address.city = "Mumbai";
console.log(eg1.address.city);
// 6. Update first index of techStacks to JavaScript
eg1.techStacks[0] = "JavaScript";
console.log(eg1.techStacks);
eg1["techStacks"][0] = "JavaScript1";
console.log(eg1.techStacks); */

// access keys of object
/* var eg1 = {
  name: "Payal Vishal",
  dob: "15/04/1988",
  age: 36,
  isMarried: true,
  techStacks: ["JS", "React", "Node", "GrpahQl"],
  address: {
    pincode: 400706,
    city: "Nerul Navi Mumbai",
  },
  greet: function () {
    console.log("Hi, from Payal Butala!");
    return "Hahahahah";
  },
};
// access keys of object
console.log(Object.keys(eg1));
// access values of object
console.log(Object.values(eg1));

// access keys & values of object
var keysObj = Object.keys(eg1);
for (let i = 0; i < keysObj.length; i++) {
  console.log("Key : " + keysObj[i], "-- Value : " + eg1[keysObj[i]]);
}

// access keys of object
for (let j in eg1) {
  console.log(j);
} */
