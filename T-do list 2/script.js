const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const editBtn = document.getElementById("edit-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
    const inputText = todoInput.value.trim();
    
    if (inputText) {
        // Create new list item
        const newItem = document.createElement("li");
        newItem.className = "todo-item"; // Optionally, add a class for identification
        
        // Create a span to hold the task text
        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = inputText;
        taskTextSpan.className = "task"; // Add a class for task text

        // Create delete button for the new item
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
    
        deleteBtn.addEventListener("click", () => {
            todoList.removeChild(newItem);
        });

        // Append the task text and delete button to the new item
        newItem.appendChild(taskTextSpan);
        newItem.appendChild(deleteBtn);

        // Append the new item to the list
        todoList.appendChild(newItem);
        todoInput.value = ""; // Clear the input field
    } else {
        alert("Please enter an item!");
        return;
    }
});

function editTask(taskElement) {
    // Get the current text content of the task span
    const taskTextSpan = taskElement.querySelector(".task");
    const taskText = taskTextSpan.textContent;

    const newText = prompt("Edit Task:", taskText); // Prompt user for new task text

    if (newText !== null) {
        // Update the text content of the span with the new text
        taskTextSpan.textContent = newText.trim(); 
    }
}

// Event listener for the edit button to edit the first task
editBtn.addEventListener("click", () => {
    const taskToEdit = document.querySelector(".todo-item"); // Select the first to-do item
    if (taskToEdit) {
        editTask(taskToEdit); // Edit the selected task
    } else {
        alert("No task available to edit!"); // Handle case when no tasks are present
    }
});




/*   const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Event listener for adding a new task
addBtn.addEventListener("click", () => {
    const inputText = todoInput.value.trim();
    
    if (inputText) {
        // Create new list item
        const newItem = document.createElement("li");
        newItem.className = "todo-item"; // Optionally, add a class for identification
        newItem.textContent = inputText;

        // Create edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";
        editBtn.addEventListener("click", () => enableEdit(newItem)); // Attach edit function

        // Append the edit button to the new item
        newItem.appendChild(editBtn);

        // Append the new item to the list
        todoList.appendChild(newItem);
        todoInput.value = ""; // Clear the input field
    } else {
        alert("Please enter an item!");
        return;
    }
});

// Function to enable editing on a task
function enableEdit(taskElement) {
    const taskText = taskElement.firstChild.textContent; // Get the current text content of the task

    // Create an input field with the current task text
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = taskText;
    inputField.className = "edit-input";

    // Replace the current text with the input field
    taskElement.firstChild.replaceWith(inputField);

    // Focus on the input field and select the text for easier editing
    inputField.focus();
    inputField.select();

    // Handle updating the task when the user presses "Enter" or leaves the input field
    inputField.addEventListener("blur", () => saveEdit(taskElement, inputField));
    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            saveEdit(taskElement, inputField);
        }
    });
}

// Function to save the edited task text
function saveEdit(taskElement, inputField) {
    const newText = inputField.value.trim();

    // Replace the input field with the updated text
    if (newText) {
        const textNode = document.createTextNode(newText);
        inputField.replaceWith(textNode);
    } else {
        alert("Task cannot be empty!");
        inputField.focus();
    }
}           */