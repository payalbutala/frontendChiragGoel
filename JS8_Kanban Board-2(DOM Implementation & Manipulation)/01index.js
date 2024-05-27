const addRef = document.querySelector(".quick-action .add");
const modalRef = document.querySelector(".modal");
const modalCloseRef = document.querySelector(".modal .close");
// Way 1
// addRef.addEventListener("click", function () {
//   modalRef.classList.remove("hide");
// });

modalCloseRef.addEventListener("click", function () {
  modalRef.classList.add("hide");
});

// Way 2
addRef.addEventListener("click", function () {
  console.log("classlist", [...modalRef.classList].includes("hide"));
  let isClassExists = [...modalRef.classList].includes("hide");

  if (isClassExists) {
    modalRef.classList.remove("hide");
  } else {
    modalRef.classList.add("hide");
  }
});

let tasks = [
  {
    id: 1,
    priority: "p1",
    description: "Task 1",
  },
  {
    id: 2,
    priority: "p2",
    description: "Task 2",
  },
  {
    id: 3,
    priority: "p3",
    description: "Task 3",
  },
];

function openModal() {
  modalRef.classList.remove("hide");
}

function closeModal() {
  modalRef.classList.add("hide");
}

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

// Function to select ticket priority colorwise pink/green/blue/black
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

// function which will return ticket priority number based on ticket which has sleected class
function getPriority() {
  let priority = "";
  modalBoxesRef.forEach(function (item, index) {
    if ([...item.classList].includes("selected")) {
      priority = `p${index + 1}`;
    }
  });
  return priority;
}

// create ticket html
function createTicket(ticket) {
  return `<div class="ticket-priority ${ticket.priority}"></div>
          <div class="ticket-id">${ticket.id}</div>
          <div class="ticket-content">
            <textarea value="text" disabled>${ticket.description}</textarea>
          </div>
          <div class="ticket-lock locked"><i class="fa-solid fa-lock"></i><i class="fa-solid fa-lock-open"></i></div>`;
  // modalRef.append(tkt);
}

// function which will create task after press on shift
const textAreaRef = document.querySelector(".modal textarea");
textAreaRef.addEventListener("keyup", function (e) {
  if (e.key == "Shift") {
    console.log(e.target);
    const priority = getPriority();
    tasks.push({
      id: tasks.length + 1,
      description: e.target.value,
      priority: priority,
    });
    // closeModal();
    listTickets(tasks);
  }
  console.log(tasks);
});

let ticketSectionRef = document.querySelector(".ticket-section");
function listTickets(tasks) {
  ticketSectionRef.innerHTML = "";
  tasks.forEach(function (ticket) {
    let ticketContainerRef = document.createElement("div");
    ticketContainerRef.setAttribute("class", "ticket-container");
    ticketContainerRef.setAttribute("data-id", ticket.id);
    ticketContainerRef.innerHTML = createTicket(ticket);
    ticketSectionRef.appendChild(ticketContainerRef);
    const textAreaRef = ticketContainerRef.querySelector(
      ".ticket-content textarea"
    );

    textAreaRef.addEventListener("blur", function (e) {
      const currentTicketId = e.target
        .closest(".ticket-container")
        .getAttribute("data-id");
      console.log(currentTicketId);

      updateTaskDescription(currentTicketId, textAreaRef.value);
    });
  });
}

listTickets(tasks);

// remove lock from task & make it editable
ticketSectionRef.addEventListener("click", function (ev) {
  if ([...ev.target.classList].includes("fa-solid")) {
    const currentTicketContainerRef = ev.target.closest(".ticket-container");
    // console.log(currentTicketContainerRef.getAttribute("data-id"));
    const currentTicketId = currentTicketContainerRef.getAttribute("data-id");
    console.log(currentTicketId);
    const currentTextAreaRef = currentTicketContainerRef.querySelector(
      ".ticket-content textarea"
    );
    currentTextAreaRef.removeAttribute("disabled");
    const lockRef = currentTicketContainerRef.querySelector(".ticket-lock");
    const isEditable = lockRef.classList.contains("locked");
    if (isEditable) {
      lockRef.classList.remove("locked");
      currentTextAreaRef.removeAttribute("disabled");
    } else {
      lockRef.classList.add("locked");
      currentTextAreaRef.setAttribute("disabled", true);
    }
  }
});

function updateTaskDescription(id, description) {
  const selectedTask = tasks.find(function (e) {
    return e.id == id;
  });
  if (selectedTask) {
    selectedTask.description = description;
  }
  console.log(tasks);
}
