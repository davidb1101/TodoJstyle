const todoAddAction = document.getElementById("add-item");

todoAddAction.addEventListener("click", AddToDoItem);

class todoItem {
  constructor(itemName) {
    this.name = itemName;
    this.completed = false;
  }
}

let todoList = [];

function DisplayToDoItems() {
  let theTodoList = document.getElementById("todo-list");
  let completedToDoList = document.getElementById("completed-todo-list");

  //clears the list so it doesn't duplicate items on the page
  if (theTodoList.innerHTML.length > 0) {
    theTodoList.innerHTML = "";
  }
  if (completedToDoList.innerHTML.length > 0) {
    completedToDoList.innerHTML = "";
  }

  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i] !== null) {
      console.log(todoList[i].name);
      let newlistitem = document.createElement("li");
      let node = document.createTextNode(todoList[i].name);

      let deleteBtn = document.createElement("input");

      deleteBtn.type = "button";
      deleteBtn.value = "Delete";
      deleteBtn.id = i + "-delete";
      deleteBtn.addEventListener("click", function () {
        deleteTodoItem(this.id);
      });

      newlistitem.appendChild(node);
      newlistitem.appendChild(deleteBtn);

      // checking to see if to add the Complete button if not completed
      // otherwise will be put in Completed list without complete button
      if (todoList[i].completed === false) {
        let completeBtn = document.createElement("input");
        completeBtn.type = "button";
        completeBtn.value = "Complete";
        completeBtn.id = i + "-complete";
        completeBtn.addEventListener("click", function () {
          completeTodoItem(this.id);
        });
        newlistitem.appendChild(completeBtn);
        theTodoList.appendChild(newlistitem);
      } else {
        completedToDoList.appendChild(newlistitem);
      }
    }
  }

  console.log(theTodoList.innerHTML);
}

function deleteTodoItem(itemId) {
  console.log(itemId);
  id = itemId.split("-")[0];
  todoList[id] = null;
  DisplayToDoItems();
}

function completeTodoItem(itemId) {
  console.log(itemId);
  //need to check each item in the list
  id = itemId.split("-")[0];
  todoList[id].completed = true;
  console.log(todoList[id]);
  DisplayToDoItems();
}

function AddToDoItem() {
  newTodoItem = document.getElementById("task-name").value;

  if (!(newTodoItem === "Add task here")) {
    console.log("Adding item to todo");
    todoList.push(new todoItem(newTodoItem));
  }
  DisplayToDoItems();
}
