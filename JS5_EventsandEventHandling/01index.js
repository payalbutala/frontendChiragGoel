let inputRef = document.querySelector(".form .username");
let previewRef = document.getElementsByClassName("preview")[0];
let btnSubmit = document.querySelector("#submit");
let passwordRef = document.querySelector(".form .password");
const obj = {};

// Way 1
/*inputRef.addEventListener("keyup", function (ev) {
  console.log(ev.target.value);
  previewRef.innerText = ev.target.value;
});

passwordRef.addEventListener("keyup", function (ev) {
  //   console.log(ev.target.value);
  //   previewRef.innerText = ev.target.value;
  obj["password"] = ev.target.value;
});

btnSubmit.addEventListener("click", function (ev) {
  //   let obj = {
  //     name: previewRef.innerText,
  //   };
  // OR
  obj["username"] = previewRef.innerText;
  console.log(obj);
});
*/

// Way2
let formRef = document.querySelector(".form");
formRef.addEventListener("submit", function (ev) {
  // prevents forms submit action
  ev.preventDefault();
  console.log("--------", ev);
  console.log("Fetch Form Elements");
  //   console.log(typeof formRef.elements);

  // using Array ForEach
  [...formRef.elements].forEach((element) => {
    // console.log(element.value);
    // if (element.name) {
    //   obj[element.name] = element.value;
    // }
  });

  // using Reduce
  [...formRef.elements].reduce(function (acc, item) {
    if (item.name) {
      obj[item.name] = item.value;
    }
    return acc;
  }, {});

  console.log("---- Show Value in Object----");
  console.log(obj);
});

// Fetch form elements & its value
