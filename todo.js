// Step 3 — Select the elements
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

// Listen for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Step 3.1 — Get the task name
    const taskName = taskInput.value;

    // Step 3.2 — Create a new <li>
    const li = document.createElement("li");

    // Step 3.3 — Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    // Step 3.4 — Add the task text
    li.textContent = taskName;

    // Step 3.5 — Put the delete button inside the <li>
    li.appendChild(deleteButton);

    // Step 3.6 — Add the <li> to the task list
    taskList.appendChild(li);

    // Step 3.7 — Clear the input
    taskInput.value = "";

    // Step 3.8 — Delete a task
    deleteButton.addEventListener("click", () => {
        li.remove();
    });
});