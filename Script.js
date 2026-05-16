const API = "http://localhost:8080/tasks";

async function getTasks() {

    const response = await fetch(API);

    const tasks = await response.json();

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${task.title}
            <button onclick="deleteTask(${task.id})">
                Delete
            </button>
        `;

        taskList.appendChild(li);
    });
}

async function addTask() {

    const title = document.getElementById("taskInput").value;

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title
        })
    });

    document.getElementById("taskInput").value = "";

    getTasks();
}

async function deleteTask(id) {

    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    getTasks();
}

getTasks();
