let container = document.createElement("div");
container.classList.add("container-fluid");
document.body.appendChild(container);

let cardElement = document.createElement("div");
cardElement.classList.add("card","d-flex","flex-column","align-items-center","shadow-lg");
container.appendChild(cardElement);

let headingElement = document.createElement("h1");
headingElement.textContent = "Student's Task Manager";
headingElement.classList.add("heading");
cardElement.appendChild(headingElement);

let inputContainer = document.createElement("div");
inputContainer.classList.add("input-container","d-flex","flex-row");
cardElement.appendChild(inputContainer);

let taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.placeholder = "Enter what needs to be done";
taskInput.classList.add("task-input");
inputContainer.appendChild(taskInput);

let buttonElement = document.createElement("button");
buttonElement.textContent = "Add Task";
buttonElement.classList.add("btn","btn-primary","add-task-button");
inputContainer.appendChild(buttonElement);

let headingsContainer = document.createElement("div");
headingsContainer.classList.add("d-flex","flex-row");

let totalTasksHeadingContainer = document.createElement("div");
totalTasksHeadingContainer.classList.add("total-tasks-heading-container");

let totalTasks = document.createElement("h3");
totalTasks.textContent = "My Tasks: ";
totalTasks.classList.add("total-tasks");
totalTasksHeadingContainer.appendChild(totalTasks);
cardElement.appendChild(totalTasksHeadingContainer);

let taskContainer = document.createElement("div");
taskContainer.classList.add("task-container","d-flex","flex-column");
cardElement.appendChild(taskContainer);

let taskList = document.createElement("ul");
taskList.classList.add("task-list");
taskContainer.appendChild(taskList);

function createandAppendTodo(task){
    let todoItem = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    todoItem.appendChild(checkbox);

    let labelElement = document.createElement("label");
    labelElement.textContent = task;
    labelElement.classList.add("task-label");
    todoItem.appendChild(labelElement);
    todoItem.classList.add("task-item");
    
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far","far-trash-alt","delete-icon");
    todoItem.appendChild(deleteIcon);


    taskList.appendChild(todoItem);
    taskInput.value = "";
}


buttonElement.addEventListener("click",function(){
    createandAppendTodo(taskInput.value);
});

