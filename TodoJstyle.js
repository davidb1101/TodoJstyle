
const todoAddAction = document.getElementById("add-item");

todoAddAction.addEventListener("click", AddToDoItem);

class todoItem {
  constructor(itemName) {
    this.name = itemName;
  }
}


let todoList = [];


function DisplayToDoItems() {
  let theTodoList = document.getElementById("todo-list");

  console.log(theTodoList.innerHTML.length);
  if (theTodoList.innerHTML.length > 0) {
    for (let j = 0; j < theTodoList.innerHTML.length; j++) {
      console.log(theTodoList.innerHTML[j]);
    }
    theTodoList.innerHTML = "";
  }
  for (let i = 0; i < todoList.length; i++) {
    console.log(todoList[i].name);
    let newlistitem = document.createElement("li");
    let node = document.createTextNode(todoList[i].name);
    newlistitem.appendChild(node);
    theTodoList.appendChild(newlistitem);
  }
}

function AddToDoItem() {
  newTodoItem = document.getElementById("task-name").value;

  if (!(newTodoItem === "Add task here")) {
    console.log("Adding item to todo");
    todoList.push(new todoItem(newTodoItem));
  }
  DisplayToDoItems();
}
