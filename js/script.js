const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.innerText = taskText;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
