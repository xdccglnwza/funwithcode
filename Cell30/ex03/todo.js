const newButton = document.getElementById("new-btn");
const todoList = document.getElementById("ft_list");

function saveTodos() {
    const todos = [];

    const items = todoList.querySelectorAll(".todo");

    items.forEach(function (item) {
        todos.push(item.textContent);
    });

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}



function createTodo(text) {
    const todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;

    todo.addEventListener("click", function () {
        const confirmed = confirm("Do you want to remove this TO DO?");

        if (confirmed) {
            todo.remove();
            saveTodos();
        }
    });

    todoList.prepend(todo);
}



newButton.addEventListener("click", function () {
    const text = prompt("Create a new TO DO:");

    if (text !== null && text.trim() !== "") {
        createTodo(text.trim());
        saveTodos();
    }
});



function loadTodos() {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        const parts = cookie.split("=");

        const name = parts.shift();
        const value = parts.join("=");

        if (name === "todos") {
            try {
                const todos = JSON.parse(decodeURIComponent(value));

                todos.reverse().forEach(function (text) {
                    createTodo(text);
                });
            } catch (error) {
                console.log("Invalid cookie");
            }
        }
    }
}


loadTodos();