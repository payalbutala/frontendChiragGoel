const parentContainerRef = document.querySelector("#progress-wrapper");
const progressRef = parentContainerRef.querySelector(".progress");
const startRef = parentContainerRef.querySelector(".start");
const stopRef = parentContainerRef.querySelector(".stop");
const resetRef = parentContainerRef.querySelector(".reset");

let intervalRef = 0;

function renderProgress() {
  // WAY1
  /* intervalRef = setInterval(() => {
    let newValue = getProgressValue() + 5;
    setProgressValue(newValue);

    if (newValue >= 100) {
      clearInterval(intervalRef);
    }
  }, 1000); */

  //WAY2 -> Improve Performance
  let newValue = getProgressValue() + 1;
  setProgressValue(newValue);

  if (newValue <= 100) {
    animationFrameRef = requestAnimationFrame(renderProgress); // => do not call function just give its reference
  }
}

function stopProgress() {
  // WAY1
  //   clearInterval(intervalRef);

  //WAY2
  cancelAnimationFrame(animationFrameRef);
}

function getProgressValue() {
  //   console.log("get", +progressRef.style.width.split("%")[0]);
  return +progressRef.style.width.split("%")[0];
}

function setProgressValue(value) {
  //   console.log("set", +value);
  progressRef.style.width = `${value}%`;
}

startRef.addEventListener("click", function () {
  startRef.setAttribute("disabled", true);
  stopRef.removeAttribute("disabled");
  renderProgress();
});

stopRef.addEventListener("click", function () {
  stopProgress();
  startRef.removeAttribute("disabled");
  stopRef.setAttribute("disabled", true);
});

resetRef.addEventListener("click", function () {
  setProgressValue(0);
  clearInterval(intervalRef);
  startRef.removeAttribute("disabled");
  stopRef.setAttribute("disabled", true);
});
