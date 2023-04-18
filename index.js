const app = document.getElementById("app-container");
const addBtn = document.getElementById("add-btn");
const todoItems = document.getElementById("todo-items");
const userInput = document.getElementById("todo");


function createTodoItem(todoItem){
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check-button");
    checkBtn.innerText = "DONE";
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");
    deleteBtn.innerText = "DELETE";
    const newItem = document.createElement("p");
    newItem.innerText = todoItem;
    const newItemContainer = document.createElement("div");
    newItemContainer.classList.add("item-container")
    newItemContainer.append(newItem);
    newItemContainer.append(checkBtn);
    newItemContainer.append(deleteBtn);
    todoItems.append(newItemContainer);
}

function addNewItem(){
    createTodoItem(userInput.value);
    userInput.value = "";
}

app.addEventListener("click", (e)=>{
    const clickedElement = e.target;
    if(clickedElement.matches("#add-btn")){
        addNewItem();
    }
    else if(clickedElement.matches(".check-button")){
        clickedElement.previousElementSibling.style.textDecoration = "line-through";
    }
    else if(clickedElement.matches(".delete-button")){
        clickedElement.parentElement.remove();
    }
})