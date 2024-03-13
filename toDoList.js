let form = document.getElementById("formToDo");
let inputTasks = document.getElementById("inputTasks");
let btnTasks = document.getElementById("btnTasks");
let containerTask = document.getElementById("containerTask");

btnTasks.onclick = (e) => {
  e.preventDefault();
  let divTask = document.createElement("div");
  divTask.className = "divTask";
  let newTask = document.createElement("h3");
  let text = inputTasks.value;
  if (text.length > 0) {
    newTask.innerText = text;

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
  }
};

form.addEventListener("submit", task);
