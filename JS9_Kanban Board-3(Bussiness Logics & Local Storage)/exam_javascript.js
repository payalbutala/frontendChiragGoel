// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Write your code here
  // Use console.log to output the result

  const obj = contacts.find(function (e) {
    if (name === e.firstName) {
      return true;
    }
    return false;
  });

  if (!obj) {
    return "No such contact";
  } else if (obj && obj.hasOwnProperty(prop)) {
    return obj[prop];
  } else {
    return "No such property";
  }
}
console.log(
  lookUpProfile("Kristian", "lastName"),
  lookUpProfile("Harry", "likes"),
  lookUpProfile("Harry11", "lastName11"),
  lookUpProfile("Harry", "lastName11")
);

function add(a, b) {
  return a + b;
}

function reducer(arr, reduce) {
  let total = 0;
  arr.forEach((element) => {
    total = reduce(total, element);
  });
  return total;
}

console.log(reducer([4, 2, 3, 4, 5], add));
