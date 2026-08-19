// Step 2 — Create the Tasks Array
const tasks = [
    {
        id: 1,
        title: "Complete JavaScript lesson",
        completed: true
    },
    {
        id: 2,
        title: "Practice array methods",
        completed: false
    },
    {
        id: 3,
        title: "Review JavaScript objects",
        completed: true
    },
    {
        id: 4,
        title: "Build the task manager",
        completed: false
    },
    {
        id: 5,
        title: "Submit Week 4 assignment",
        completed: false
    }
];

// Step 3 — Filter Pending Tasks
const pendingTasks = tasks.filter(
    task => task.completed === false
);

// Step 4 — Format the Pending Tasks
const formattedTasks = pendingTasks.map(
    task => `Task #${task.id}: ${task.title} (Status: Pending)`
);

// Step 5 — Log Each Task
formattedTasks.forEach(taskString => {
    console.log(taskString);
});