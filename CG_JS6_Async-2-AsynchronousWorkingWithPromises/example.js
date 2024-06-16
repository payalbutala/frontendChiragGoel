const fs = require("fs");

console.log("Start");

// file_name, callback
const data = fs.readFile("file1.txt", function (err1, data1) {
  // callback will execute
  if (err1) {
    console.log("Error Reading File 1");
  } else {
    console.log(data1.toString());
    fs.readFile("file2.txt", function (err2, data2) {
      if (err2) {
        console.log("Error Reading File2");
      } else {
        console.log(data2.toString());
        fs.readFile("file3.txt", function (err3, data3) {
          if (err3) {
            console.log("Error Reading File3");
          } else {
            console.log(data3.toString());
          }
        });
      }
    });
  }
}); // ASYNCHRONOUS task
console.log(data);

console.log("End");
