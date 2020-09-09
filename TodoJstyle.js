
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


  if (theTodoList.innerHTML.length > 0) {
    theTodoList.innerHTML = "";
  }

  for (let i = 0; i < todoList.length; i++) {
    console.log(todoList[i].name);
    let newlistitem = document.createElement("li");
    let node = document.createTextNode(todoList[i].name);

    let deleteBtn = document.createElement("input");
    let completeBtn = document.createElement("input");

    deleteBtn.type = "button";
    completeBtn.type = "button";
    deleteBtn.value = "Delete";
    completeBtn.value = "Complete";
    deleteBtn.id = i+"-delete";
    completeBtn.id = i+"-complete";

    //deleteBtn.addEventListener("click")
    /*
    so what can I do to delete the item both from the list and from the display?
    well I can add a custom ID and have that as a parameter to the function for the delete/complete
    I can also add a property for completion (delete just remove the item)
    the custom ID could also be used to remove the item from the list

    */
   deleteBtn.addEventListener("click", function(){
    deleteTodoItem(this.id);
   })
   completeBtn.addEventListener("click", function(){
    completeTodoItem(this.id);
   })
    newlistitem.appendChild(node);
    newlistitem.appendChild(deleteBtn);
    newlistitem.appendChild(completeBtn);
    theTodoList.appendChild(newlistitem);
  }

  console.log(theTodoList.innerHTML);
}

function deleteTodoItem(itemId)
{
  console.log(itemId);
}


function completeTodoItem(itemId)
{
  console.log(itemId);
}

function AddToDoItem() {
  newTodoItem = document.getElementById("task-name").value;

  if (!(newTodoItem === "Add task here")) {
    console.log("Adding item to todo");
    todoList.push(new todoItem(newTodoItem));
  }
  DisplayToDoItems();
}
