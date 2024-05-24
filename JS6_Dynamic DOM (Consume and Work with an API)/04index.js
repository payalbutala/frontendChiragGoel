const todoList = [
  {
    id: 1,
    text: "Buy Milk",
    iscompleted: true,
  },
  {
    id: 2,
    text: "Attened Class",
    iscompleted: false,
  },
  {
    id: 3,
    text: "Go for shopping",
    iscompleted: true,
  },
  {
    id: 4,
    text: "Watch Movie",
    iscompleted: false,
  },
];
/*
let todoRef = document.querySelector(".todo-list");
function renderTodoList() {
  todoRef.innerHTML = "";
  for (const key in todoList) {
    if (Object.hasOwnProperty.call(todoList, key)) {
      console.log("key", key);
      console.log("val", todoList[key].text);

      let item = document.createElement("li");
      item.setAttribute("class", "item");
      item.innerText = todoList[key].text;
      todoRef.append(item);
      //   const element = object[key];
    }
  }
}

/* 
  todoList.forEach((todo) => {
    console.log(todo);
    let item = document.createElement("li");
    item.classList.add("item");
    item.innerText = todo.text;
    todoRef.append(item);
  });

  todoList.forEach(function (item) {
    console.log(item);
  }); 
}

renderTodoList();
*/

let todoRef = document.querySelector(".todo-list");
function renderTodoList() {
  todoRef.innerHTML = "";
  let todoList = fetchTodoList()
    .then((res) => res.json())
    .then((data) => {
      todoList = data;
      for (const key in todoList) {
        if (Object.hasOwnProperty.call(todoList, key)) {
          console.log("key", key);
          console.log("val", todoList[key].text);

          let item = document.createElement("li");
          item.setAttribute("class", "item");
          item.innerText = todoList[key].text;
          todoRef.append(item);
          //   const element = object[key];
        }
      }
    })
    .catch((err) => console.log(err));
}

renderTodoList();

const inputRef = document.querySelector("#new-todo");
inputRef.addEventListener("keyup", function (e) {
  //   let todoRef = document.querySelector(".todo-list");
  console.log(e.key); // gives key as = Enter
  if (e.key == "Enter") {
    todoList.push({
      id: todoList.length + 1,
      text: e.target.value,
      iscompleted: false,
    });
    renderTodoList(todoList);
    inputRef.value = "";
  }
});

function fetchTodoList() {
  return fetch("https://mocki.io/v1/b8da8a6a-d794-4787-84d8-1439cae2974d");
  // .then((res) => res.json())
  // .then((data) => console.log(data))
  // .catch((err) => console.log(err));
}
