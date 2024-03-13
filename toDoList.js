let form = document.getElementById("formToDo");
let inputTasks = document.getElementById("inputTasks");
let btnTasks = document.getElementById("btnTasks");
let containerTask = document.getElementById("containerTask");

form.onsubmit = (e) => {
  e.preventDefault();
  let divTask = document.createElement("div");
  divTask.className = "divTask";
  let newTask = document.createElement("h3");
  newTask.innerText = inputTasks.value;

  newTask.addEventListener("click", (e) => {
    newTask.style.textDecoration = " line-through ";
    newTask.style.backgroundColor = " green ";
  });

  let deleteTask = document.createElement("button");
  deleteTask.type = "button";
  deleteTask.style.backgroundColor = "#d20000";
  deleteTask.style.color = "white";
  deleteTask.innerText = "Delete task";
  deleteTask.addEventListener("click", (e) => {
    divTask.remove();
  });

  divTask.appendChild(newTask);
  divTask.appendChild(deleteTask);
  containerTask.appendChild(divTask);

  inputTasks.value = "";
};
