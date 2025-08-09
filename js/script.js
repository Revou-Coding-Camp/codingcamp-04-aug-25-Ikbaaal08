// Ambil elemen DOM
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const dateInput = document.getElementById("date-input");
const todoList = document.getElementById("todo-list");
const clearButton = document.getElementById("clear-button");

// Event: Tambah Todo
todoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const todoText = todoInput.value.trim();
    const todoDate = dateInput.value;

    if (todoText === "" || todoDate === "") {
        alert("Please fill out both fields.");
        return;
    }

    // Buat elemen todo
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item flex justify-between items-center bg-white p-3 rounded shadow";

    todoItem.innerHTML = `
        <span>${todoText} - <small class="text-gray-500">${todoDate}</small></span>
        <button class="text-red-500 hover:underline">Delete</button>
    `;

    // Hapus todo saat klik delete
    todoItem.querySelector("button").addEventListener("click", function () {
        todoItem.remove();
        checkEmptyList();
    });

    todoList.appendChild(todoItem);

    // Kosongkan input
    todoInput.value = "";
    dateInput.value = "";

    checkEmptyList();
});

// Event: Hapus semua todo
clearButton.addEventListener("click", function () {
    todoList.innerHTML = "";
    checkEmptyList();
});

// Fungsi cek apakah list kosong
function checkEmptyList() {
    if (todoList.children.length === 0) {
        todoList.innerHTML = `<p class="text-gray-500 text-center">No todos added yet.</p>`;
    }
}
