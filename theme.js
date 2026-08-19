// Step 3 — Array of dark slate hex colors
const slateThemes = ["#0f172a", "#1e293b", "#334155", "#475569", "#1e1b4b"];

function changeTheme() {
    // Select the elements
    const body = document.body;
    const themeStatus = document.querySelector('#theme-status');
    const themeTitle = document.querySelector('#theme-title');

    // Generate a random index and pick a color
    const randomIndex = Math.floor(Math.random() * slateThemes.length);
    const selectedColor = slateThemes[randomIndex];

    // Update body background and text color
    body.style.backgroundColor = selectedColor;
    body.style.color = "#ffffff";

    // Update the status text
    themeStatus.textContent = `Active Theme: ${selectedColor}`;
}