const smileys = ["😢", "😞", "😐", "😀", "😎"];
const smileyRef = document.querySelector(".smiley");
const ratingSectionRef = document.getElementById("rating-section");
let hoveredValue = 0;
let selectedStarValue = 0;

function createStars() {
  smileys.forEach((element, index) => {
    const newStarElementRef = document.createElement("div");
    newStarElementRef.classList.add("rating-box", "empty-star");
    newStarElementRef.setAttribute("data-id", index + 1);
    // newStarElementRef.setAttribute("class", "rating-box empty-star");
    ratingSectionRef.appendChild(newStarElementRef);
  });
}

ratingSectionRef.addEventListener("mouseover", function (ev) {
  //   console.log(ev.target);
  if (ev.target.classList.contains("rating-box")) {
    // const currentStarIndex = ev.target.getAttribute("data-id");
    const currentStarIndex = ev.target.dataset.id; // returns value of an attribute which starts with data and its -value => dataset.id or dataset.color
    // console.log(currentStarIndex);
    hoveredValue = currentStarIndex;
    rerenderStars();
  }
});

ratingSectionRef.addEventListener("mouseleave", function (ev) {
  hoveredValue = 0;
  rerenderStars();
});

ratingSectionRef.addEventListener("click", function (ev) {
  // console.log(ev.target);
  if (ev.target.classList.contains("rating-box")) {
    const currentStarIndex = ev.target.dataset.id;
    selectedStarValue = currentStarIndex;
    smileyRef.innerText = smileys[selectedStarValue - 1];
    rerenderStars(selectedStarValue);
  }
});

function rerenderStars() {
  const ratingBoxes = document.querySelectorAll(".rating-box");
  [...ratingBoxes].forEach((boxRef, idx) => {
    const highlightIndex = hoveredValue || selectedStarValue;
    // +hoveredValue converts string to Number
    if (idx < +highlightIndex) {
      //   console.log(boxRef, idx, highlightIndex);
      boxRef.classList.add("fulled-star");
      boxRef.classList.remove("empty-star");
    } else {
      boxRef.classList.add("empty-star");
      boxRef.classList.remove("fulled-star");
    }
  });
}

createStars();
