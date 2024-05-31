openModalButtonRef = document.querySelector(".quick-action .icon.add");
modalRef = document.querySelector(".modal");
closeModalButtonRef = document.querySelector(".modal .right-section .close");
deleteRef = document.querySelector(".delete");
ticketSectionRef = document.querySelector(".ticket-section");

const textAreaRef = document.querySelector(".modal .left-section textarea");
const priorityBoxRef = document.querySelectorAll(
  ".modal .right-section .priority-filter .box"
);

const tasks = [
  {
    id: 1,
    description: "task 1",
    priority: "p1",
  },
  {
    id: 2,
    description: "task 2",
    priority: "p2",
  },
  {
    id: 3,
    description: "task 3",
    priority: "p3",
  },
  {
    id: 4,
    description: "task 4",
    priority: "p4",
  },
];
listTickets(tasks);

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
    ticketContainerRef.setAttribute("data-id", ticket.id);
    const ticketElement = createHtml(ticket);
    // console.log("ticketElement", ticketElement);
    ticketContainerRef.innerHTML = ticketElement;
    ticketSectionRef.appendChild(ticketContainerRef);

    const textAreaRef = ticketContainerRef.querySelector(
      ".ticket-content textarea"
    );

    textAreaRef.addEventListener("blur", function (ev) {
      // const txtValue = ev.target.value;
      // console.log(txtValue);

      const currentTicketContainerRef = ev.target.closest(".ticket-container");
      const currentTicketId = currentTicketContainerRef.getAttribute("data-id");
      console.log(currentTicketId);

      updateTaskDescription(currentTicketId, textAreaRef.value);
    });
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

ticketSectionRef.addEventListener("click", function (ev) {
  const classExists = ev.target.classList.contains("fa-solid");

  if (classExists) {
    const currentTicketContainerRef = ev.target.closest(".ticket-container");
    const currentTicketId = currentTicketContainerRef.getAttribute("data-id");
    const currentTextAreaRef = currentTicketContainerRef.querySelector(
      ".ticket-content textarea"
    );
    const lockRef = currentTicketContainerRef.querySelector(".ticket-lock");

    let isEditable = lockRef.classList.contains("locked");
    // console.log(ev.target);

    if (isEditable) {
      lockRef.classList.remove("locked");
      currentTextAreaRef.removeAttribute("disabled");
    } else {
      lockRef.classList.add("locked");
      currentTextAreaRef.setAttribute("disabled", true);
    }

    // currentTextAreaRef.addEventListener("blur", function (ev) {
    //   const txtValue = ev.target.value;
    //   tasks.find(function (ele, index) {
    //     console.log(tasks[index].id, currentTicketId);
    //     if (tasks[index].id == parseInt(currentTicketId)) {
    //       tasks[index].description = txtValue;
    //     }
    //   });
    // });
  }
  // console.log(tasks);
});

function updateTaskDescription(id, updatedDescription) {
  // console.log(id, updatedDescription);
  // tasks.find(function (ele, ind) {
  //   // console.log(ele);
  //   if (id == ind + 1) {
  //     ele.description = updatedDescription;
  //   }
  // });

  const selectedTask = tasks.find((task) => task.id === parseInt(id));
  if (selectedTask) {
    selectedTask.description = updatedDescription;
  }
  console.log(tasks);
}
