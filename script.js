// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <input type="checkbox">
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
    saveTasks();
}

// Function to delete a task
function deleteTask(button) {
    const taskList = document.getElementById('task-list');
    taskList.removeChild(button.parentElement);
    saveTasks();
}

// Function to save tasks to local storage
function saveTasks() {
    const taskList = document.getElementById('task-list').innerHTML;
    localStorage.setItem('tasks', taskList);
}

// Load tasks from local storage
function loadTasks() {
    const taskList = document.getElementById('task-list');
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        taskList.innerHTML = savedTasks;
    }
}

loadTasks();
