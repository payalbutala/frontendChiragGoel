const addRef = document.querySelector(".quick-action .add");
const modalRef = document.querySelector(".modal");
const modalCloseRef = document.querySelector(".modal .close");
/* Way 1
addRef.addEventListener("click", function () {
  modalRef.classList.remove("hide");
});

modalCloseRef.addEventListener("click", function () {
  modalRef.classList.add("hide");
});
 */

/* Way 2
addRef.addEventListener("click", function () {
  let isClassExists = [...modalRef.classList].includes("hide");

  if (isClassExists) {
    modalRef.classList.remove("hide");
  } else {
    modalRef.classList.add("hide");
  }
}); */

let itemObj = [];

function openModal() {
  modalRef.classList.remove("hide");
}

function closeModal() {
  modalRef.classList.add("hide");
}

const textAreaRef = document.querySelector(".modal textarea");
textAreaRef.addEventListener("keyup", function (e) {
  if (e.key == "Shift") {
    console.log(e.target);
    const priority = getPriority();
    itemObj.push({
      id: itemObj.length + 1,
      description: e.target.value,
      priority: priority,
    });
    closeModal();
  }
  console.log(itemObj);
});

let modalBoxesRef = document.querySelectorAll(
  ".right-section .priority-filter .box"
);

function removeSelectedClassfromBox() {
  modalBoxesRef.forEach(function (e) {
    e.classList.remove("selected");
  });
}

function addSelectedClassfromBox(boxRef) {
  boxRef.classList.add("selected");
}

function getPriority() {
  let priority = "";
  modalBoxesRef.forEach(function (item, index) {
    if ([...item.classList].includes("selected")) {
      priority = `p${index + 1}`;
    }
  });
  return priority;
}

// console.log(modalBoxesRef);
modalBoxesRef.forEach((e) => {
  e.addEventListener("click", function (ele) {
    // remove selected class from all box
    removeSelectedClassfromBox();
    console.log(ele);
    // add selected class to current box
    // Way 1 ele.target.classList.add("selected");
    //   OR
    // Way 2
    addSelectedClassfromBox(ele.target);
  });
});
