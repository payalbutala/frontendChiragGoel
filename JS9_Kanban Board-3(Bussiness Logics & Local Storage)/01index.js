const openModalButtonRef = document.querySelector(".quick-action .icon.add");
const modalRef = document.querySelector(".modal");
const closeModalButtonRef = document.querySelector(
  ".modal .right-section .close"
);
const deleteDivRef = document.querySelector(".quick-action .icon.delete");
const ticketSectionRef = document.querySelector(".ticket-section");
const textAreaRef = document.querySelector(".modal .left-section textarea");
const priorityBoxRef = document.querySelectorAll(
  ".modal .right-section .priority-filter .box"
);
const priorityFilterRef = document.querySelector(".priority-filter");
const clearFilterRef = document.querySelector(".clear-filter");

const data = [
  {
    id: new ShortUniqueId().rnd(),
    description: "task 1",
    priority: "p1",
  },
  {
    id: new ShortUniqueId().rnd(),
    description: "task 2",
    priority: "p2",
  },
  {
    id: new ShortUniqueId().rnd(),
    description: "task 3",
    priority: "p3",
  },
  {
    id: new ShortUniqueId().rnd(),
    description: "task 4",
    priority: "p4",
  },
];

let tasks = [];
function initializeLocalStorage() {
  if (getTasksFromLocalStorage()) {
    tasks = getTasksFromLocalStorage();
  } else {
    tasks = data; // updating data in local variable.
  }
  updateTasksInLocalStorage(tasks);
}
initializeLocalStorage();

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

// remove selected class from all
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
  return `<div class="ticket-priority" data-priority="${ticket.priority}"></div>
            <div class="ticket-id">${ticket.id}</div>
            <div class="ticket-content">
              <textarea value="text" disabled>${ticket.description}</textarea>
            </div>
        <div class="ticket-lock locked"><i class="fa-solid fa-lock"></i><i class="fa-solid fa-lock-open"></i></div>
        <div class="ticket-delete"><i class="fa-solid fa-trash"></i></div>`;
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
    // Instantiate
    var uid = new ShortUniqueId().rnd(); // from library https://shortunique.id/classes/ShortUniqueId.html
    tasks.push({
      id: uid(),
      description: description,
      priority: priority1,
    });
    // console.log(tempObj);
    textAreaRef.value = "";
    listTickets(tasks);
    updateTasksInLocalStorage(tasks);
    closeModal();

    // createHtml();
  }
});

ticketSectionRef.addEventListener("click", function (ev) {
  const classExists = ev.target.classList.contains("fa-lock");

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

  if ([...ev.target.classList].includes("fa-trash")) {
    const currentTicketContainerRef = ev.target.closest(".ticket-container");
    const taskID = currentTicketContainerRef.getAttribute("data-id");
    // console.log(taskID);
    deleteTask(taskID);
    listTickets(tasks); // updtaes tasks on UI after delete
  }

  if ([...ev.target.classList].includes("ticket-priority")) {
    changePriority(ev.target);
  }
});

function deleteTask(taskID) {
  // console.log(taskID);
  tasks = tasks.filter((task) => task.id !== taskID);
  // console.log(tasks);
  updateTasksInLocalStorage(tasks);
}

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
  updateTasksInLocalStorage(tasks);
}

function updateTasksInLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage(tasks) {
  // JSON.parse('') => error OR JSON.parse(undefined) => error
  const tasksData = localStorage.getItem("tasks");
  return tasksData && JSON.parse(tasksData);
  return tasksData ? JSON.parse(tasksData) : undefined;
}

deleteDivRef.addEventListener("click", function (ev) {
  // console.log(ev.target);
  // console.log(ev.currentTarget);
  const isDeleteEnabled = ev.currentTarget.classList.contains("enabled");
  if (!isDeleteEnabled) {
    ev.currentTarget.classList.add("enabled");
    ticketSectionRef.classList.add("enable-delete");
  } else {
    ev.currentTarget.classList.remove("enabled");
    ticketSectionRef.classList.remove("enable-delete");
  }
});

priorityFilterRef.addEventListener("click", function (ev) {
  // console.log(ev.target.classList.contains("box"));
  if (ev.target.classList.contains("box")) {
    const selectedPriority = ev.target.id;
    // console.log(selectedPriority);
    const filteredTasks = tasks.filter(
      (task) => task.priority === selectedPriority
    );
    listTickets(filteredTasks);
    // updateTasksInLocalStorage(filteredTasks); no change in data, as its temporary data.
  }
});

clearFilterRef.addEventListener("click", function () {
  listTickets(tasks);
});

function getNextPriority(priorityStr) {
  const prioirty = Number(priorityStr.split("p")[1]);
  const priorities = [1, 2, 3, 4];
  // return priority == priorities.length ? `p${0}` : `p${priority};
  // OR
  return `p${(prioirty % priorities.length) + 1}`;
}

function changePriority(domRef) {
  // Change in DOM
  const currentPriority = domRef.getAttribute("data-priority");
  const currentTicketContainerRef = domRef.closest(".ticket-container");
  const taskID = currentTicketContainerRef.getAttribute("data-id");
  const nextPriority = getNextPriority(currentPriority);
  // console.log(currentPriority, taskID, nextPriority);
  domRef.setAttribute("data-priority", nextPriority);

  // Update in tasks (in memory)
  impactedTask = tasks.find((task) => task.id == taskID);
  const tktID = impactedTask["id"];
  // console.log("impactedTask");
  tktRefID = tasks.filter((task) => {
    if (task.id == tktID) {
      task.priority = nextPriority;
    }
  });
  // console.log(tasks);

  // Update in localStorage
  updateTasksInLocalStorage(tasks);
}
