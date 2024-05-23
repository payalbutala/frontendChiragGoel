level1Ref = document.querySelector(".level1");
level2Ref = document.querySelector(".level2");
level3Ref = document.querySelector(".level3");

/* level1Ref.addEventListener("click", function (e) {
  //   console.log("Level1 1");
  console.log(e.target.className);
  e.stopPropagation();
  alert(e.currentTarget.className);
});

level2Ref.addEventListener("click", function (e) {
  alert(e.currentTarget.className);
  //   console.log("Level2 2");
});

level3Ref.addEventListener("click", function (e) {
  // prevents event bubbling - if parent has same click event then it triggers it.
  // child level3 has click & when i click on it, parent has click so level2 & level1 will trigger. To avoid use e.stopPropagation.
  e.stopPropagation();
  alert(e.currentTarget.className);
  //   console.log(e.target.className);
  //   console.log("Level3 3");
}); */

// Example 2 : when you click on level1 but none of child has e.stopPropagation
// then it helps to give you details of child you clicked.
/* 
level1Ref.addEventListener("click", function (e) {
  // prevents event bubbling - if parent has same click event then it triggers it.
  // child level3 has click & when i click on it, parent has click so level2 & level1 will trigger. To avoid use e.stopPropagation.
  //   e.stopPropagation();
  // e.currentTarget -> On which we have added listener
  alert(e.currentTarget.className); // box level 1
  // e.target -> On which we have clicked
  console.log(e.target.className); // box level 3 as I clicked on level3
  //   console.log("Level3 3");
}); */

// Event Capture : even if child has stopPropagation(), doucment event should trigger & capture. -- VIMPPPPPPPPPPP

document.addEventListener(
  "click",
  function (e) {
    // event capture
    console.log("Document Event Capture", e.target);
    alert("Document Event Capture", e.target);
  },
  true // => Event Capture even if child has e.stopPropagation
);

// Event Capture
level1Ref.addEventListener(
  "click",
  function (e) {
    //   console.log("Level1 1");
    console.log("Level1 Event Capture", e.target.className);
    // e.stopPropagation();
    alert("Level1 Event Capture", e.currentTarget.className);
  },
  true
);

/* Event Bubbling 
  level1Ref.addEventListener("click", function (e) {
  //   console.log("Level1 1");
  console.log("Level1 Event Bubbling", e.target.className);
  e.stopPropagation();
  alert("Level1 Event Bubbling", e.currentTarget.className);
}); */

level2Ref.addEventListener("click", function (e) {
  alert("Level2 Event Bubbling", e.currentTarget.className);
  //   console.log("Level2 2");
});

level3Ref.addEventListener("click", function (e) {
  // prevents event bubbling - if parent has same click event then it triggers it.
  // child level3 has click & when i click on it, parent has click so level2 & level1 will trigger. To avoid use e.stopPropagation.
  e.stopPropagation();
  alert("Level3 Event Bubbling", e.currentTarget.className);
  //   console.log("Level3 Event Bubbling", e.target.className);
  //   console.log("Level3 Event Bubbling", "Level3 3");
});
