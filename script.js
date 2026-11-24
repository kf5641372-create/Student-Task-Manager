

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const input = document.getElementById("taskInput");
    const taskName = input.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        name: taskName,
        completed: false
    });

    input.value = "";
    saveTasks();
    displayTasks();
}

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

function displayTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const name = document.createElement("span");
        name.textContent = task.name;

        if (task.completed) {
            name.classList.add("completed");
        }

        name.style.cursor = "pointer";
        name.onclick = () => completeTask(index);

        const del = document.createElement("button");
        del.textContent = "Delete";
        del.classList.add("delete");
        del.onclick = () => deleteTask(index);

        li.appendChild(name);
        li.appendChild(del);
        list.appendChild(li);
    });

    const completed = tasks.filter(t => t.completed).length;

    document.getElementById("total").textContent = tasks.length;
    document.getElementById("completed").textContent = completed;
    document.getElementById("pending").textContent =
        tasks.length - completed;
}

displayTasks();
