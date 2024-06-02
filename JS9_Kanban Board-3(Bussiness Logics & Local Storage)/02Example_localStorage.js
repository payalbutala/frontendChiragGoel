localStorage.setItem("name", "Payal Vishal");

localStorage.setItem("location", "Mumbai");

localStorage.getItem("name"); //("Payal Vishal");
localStorage.getItem("location"); //;Mumbai;

localStorage.removeItem("name"); //;

localStorage.clear(); // No data in Application -> localStorage

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
localStorage.setItem("tickets", JSON.stringify(tasks)); // localstorage can have key-value pair as STRING only.

// Fetch data from JSON which is in string format.
localStorage.getItem("tickets"); // '[{"id":1,"description":"task 1","priority":"p1"},{"id":2,"description":"task 2","priority":"p2"},{"id":3,"description":"task 3","priority":"p3"},{"id":4,"description":"task 4","priority":"p4"}]'

// convert data in JSON Format to do modification
JSON.parse(localStorage.getItem("tickets"));
/*
[
    {
        "id": 1,
        "description": "task 1",
        "priority": "p1"
    },
    {
        "id": 2,
        "description": "task 2",
        "priority": "p2"
    },
    {
        "id": 3,
        "description": "task 3",
        "priority": "p3"
    },
    {
        "id": 4,
        "description": "task 4",
        "priority": "p4"
    }
]
 */
