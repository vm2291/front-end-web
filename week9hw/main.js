let taskElements = [];

function addTask(taskText) {
  if (taskText.trim() === "") return;

  let task = document.createElement("div");
  task.className = "task";
  task.innerHTML = `
    <span>${taskText}</span>
    <button class="completeButton">Complete</button>
  `;

  task.querySelector(".completeButton").onclick = () => {
    task.classList.toggle("completed");
  };

  document.getElementById("taskList").append(task);
  taskElements.push(task);
}

function clearCompletedTasks() {
  taskElements = taskElements.filter(task => {
    if (task.classList.contains("completed")) {
      task.remove();
      return false;
    }
    return true;
  });
}

document.getElementById("addTaskButton").onclick = () => {
  const taskInput = document.getElementById("taskInput");
  addTask(taskInput.value);
  taskInput.value = "";
};

document.getElementById("clearCompletedButton").onclick = () => {
  clearCompletedTasks();
};

addTask("Learn JavaScript");
addTask("Build a To-Do List App");
