// Update current time in milliseconds
const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  const now = new Date();
  const ms = now.getTime();
  timeElement.textContent = `${ms} (${now.toLocaleTimeString()})`;
}

updateTime();
setInterval(updateTime, 1000);

// DARK THEME
const themeToggle = document.getElementById("theme-toggle");

function updateThemeText() {
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "Toggle Theme ☀️"
    : "Toggle Theme 🌙";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeText();
}

// Check theme on load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

updateThemeText();

themeToggle.addEventListener("click", toggleTheme);
themeToggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleTheme();
  }
});
