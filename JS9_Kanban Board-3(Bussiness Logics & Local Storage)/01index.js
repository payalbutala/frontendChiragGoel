openModalButtonRef = document.querySelector(".quick-action .icon.add");
modalRef = document.querySelector(".modal");
closeModalButtonRef = document.querySelector(".modal .right-section .close");
deleteRef = document.querySelector(".delete");
ticketSectionRef = document.querySelector(".ticket-section");

const textAreaRef = document.querySelector(".modal .left-section textarea");
const priorityBoxRef = document.querySelectorAll(
  ".modal .right-section .priority-filter .box"
);

const tasks = [];
const newTask = {
  id: "",
  description: "",
  priority: "",
};

openModalButtonRef.addEventListener("click", function () {
  //   let isHideClassApplied = modalRef.classList.contains("hide");
  // OR
  let isHideClassApplied = [...modalRef.classList].includes("hide");
  isHideClassApplied ? openModal() : closeModal();
});

closeModalButtonRef.addEventListener("click", function () {
  closeModal();
});

// show Modal
function openModal() {
  modalRef.classList.remove("hide");
}

// hide Modal
function closeModal() {
  modalRef.classList.add("hide");
}

// get priority of element
function getSelectedclassPriority() {
  let priority = "";
  [...priorityBoxRef].find((element, index) => {
    const isSelected = [...element.classList].includes("selected");
    if (isSelected) {
      priority = `p${index + 1}`;
      //   console.log("priority", priority);
    }
  });

  return priority;
}

// remove selected class from all box
function removeSelectedClassFromBox() {
  [...priorityBoxRef].find((element) => {
    const isSelected = [...element.classList].includes("selected");
    if (isSelected) {
      element.classList.remove("selected");
    }
  });
}

// add selected class to current box
function addSelectedClassToCurrentBox(boxRef) {
  boxRef.classList.add("selected");
}

// prioirty selection toggle
[...priorityBoxRef].forEach(function (box) {
  box.addEventListener("click", function (e) {
    // remove selected class from all box
    removeSelectedClassFromBox(box);

    // add selected class to current box
    addSelectedClassToCurrentBox(e.target);
  });
});

// create html for Tasks
function createHtml(ticket) {
  //   console.log(ticket, "ticket");
  return `<div class="ticket-priority ${ticket.priority}"></div>
            <div class="ticket-id">${ticket.id}</div>
            <div class="ticket-content">
              <textarea value="text" disabled>${ticket.description}</textarea>
            </div>
        <div class="ticket-lock locked"><i class="fa-solid fa-lock"></i><i class="fa-solid fa-lock-open"></i></div>`;
}

// to empty ticket-section
function clearList() {
  ticketSectionRef.innerHTML = "";
}

function listTickets(tickets) {
  clearList();

  // creating list item as ticket-container & append html in it.
  tickets.forEach(function (ticket) {
    let ticketContainerRef = document.createElement("div");
    ticketContainerRef.setAttribute("class", "ticket-container");
    const ticketElement = createHtml(ticket);
    console.log("ticketElement", ticketElement);
    ticketContainerRef.innerHTML = ticketElement;
    ticketSectionRef.appendChild(ticketContainerRef);
  });
}

// on shift click in modal create tasks
textAreaRef.addEventListener("keyup", function (ev) {
  //   console.log(ev.key); // returns => Shift
  if (ev.key == "Shift") {
    //console.log(ev.target.value); => returns value entered in textbox
    const description = ev.target.value;
    const priority1 = getSelectedclassPriority();
    // console.log(description, priority);
    // let tasks = [];
    tasks.push({
      id: tasks.length + 1,
      description: description,
      priority: priority1,
    });
    // console.log(tempObj);
    textAreaRef.value = "";
    listTickets(tasks);

    // createHtml();
    // closeModal();
  }
});
