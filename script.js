let todoCount = 0;

function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");
    const totalTasks = document.getElementById("totalTasks");

    const todoText = todoInput.value.trim();
    if (todoText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="checkbox">&#9711;</span>
        <span>${todoText}</span>
        <button class="delete-btn" onclick="deleteTodo(this)">&#10060</button>
    `;

    li.addEventListener("click", function () {
        this.classList.toggle("completed");
        deleteFromTotalTasks();
    });

    todoList.appendChild(li);
    todoInput.value = "";
    incrementTotalTasks();
}

function deleteTodo(button) {
    const todoList = document.getElementById("todoList");
    const li = button.parentNode;
    todoList.removeChild(li);
    deleteFromTotalTasks();
}

function deleteFromTotalTasks(){
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.querySelectorAll(".completed").length;
    const totalListItems = document.querySelectorAll("#todoList li").length;
    todoCount = totalListItems - completedTasks;
    totalTasks.textContent = todoCount;
}

// function updateTotalTasks() {
//     const totalTasks = document.getElementById("totalTasks");
//     const completedTasks = document.querySelectorAll(".completed").length;
//     // todoCount--;
//     todoCount = todoCount - completedTasks;

//     totalTasks.textContent = todoCount;
// }

function incrementTotalTasks(){
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.querySelectorAll(".completed").length;
    const totalListItems = document.querySelectorAll("#todoList li").length;
    todoCount = totalListItems - completedTasks;
    totalTasks.textContent = todoCount;
    // todoCount++;
    // todoCount = todoCount - completedTasks;
    // totalTasks.textContent = todoCount;    
}

