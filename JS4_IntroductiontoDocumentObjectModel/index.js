/* // create and append new element inside heading section
let h3Element = document.createElement("h3");
h3Element.innerText = "Payal vishal";
document.querySelector(".heading-section").append(h3Element); */

/* // on cta click set background color to black
function darkBgColor() {
  let ele = document.querySelector("body");
  ele.style.backgroundColor = "aqua";
}

let btn = document.querySelector(".darkModeButton");
btn.addEventListener("click", darkBgColor);

btn.addEventListener("click", function () {
  darkBgColor();
}); */

/* // change font size on click of button

function increaseFontSize() {
  let ele = document.getElementById("title");
  ele.style.fontSize = "60px";
}

// var fontEle = document.getElementsByClassName("textConfig")[0];
var fontEle = document.querySelector(".textConfig");
fontEle.addEventListener("click", increaseFontSize); */

/* // toggle dark & light mode on cta click
let toggleBtn = document.querySelector(".darkModeButton");
let initMode = "light";
toggleBtn.addEventListener("click", function () {
  initMode = initMode == "light" ? "dark" : "light";
  if (initMode == "light") {
    document.querySelector("body").style.backgroundColor = "blue";
  } else {
    document.querySelector("body").style.backgroundColor = "grey";
  }
  //   console.log(initMode);
}); */

/* // classList
let darkMode = false;
let eleBody = document.querySelector("body");

function darkenBackground() {
  //   eleBody.style.background = "black";
  eleBody.classList.add("black"); // classList - array
  eleBody.classList.remove("white");
  darkMode = true;
}

function lightenBackground() {
  //   eleBody.style.background = "white";
  eleBody.classList.add("white"); // classList - array
  eleBody.classList.remove("black");
  darkMode = false;
}

var clickEle = document.querySelector(".darkModeButton");
clickEle.addEventListener("click", function () {
  if (darkMode) {
    lightenBackground();
  } else {
    darkenBackground();
  }
});
 */

/* // change font & background color on hover
let hoverEle = document.getElementById("title");
function changeEffectonHover() {
  hoverEle.style.fontSize = "3em";
  hoverEle.style.backgroundColor = "aqua";
}

function resetEffectonHover() {
  hoverEle.style.fontSize = "2em";
  hoverEle.style.backgroundColor = "transparent";
}

hoverEle.addEventListener("mouseover", function () {
  changeEffectonHover();
});

hoverEle.addEventListener("mouseout", function () {
  resetEffectonHover();
});

// addEventlistener to each element in the list
const moviesRef = document.querySelectorAll(".movies");

moviesRef.forEach(function (itemRef) {
  itemRef.addEventListener("click", function (event) {
    alert(event.currentTarget.querySelector(".price").innerText); // gives  me respective node on which i clicked
  });
}); */

document.querySelector("select").addEventListener("change", function (e) {
  console.log(e.target.value);
});
