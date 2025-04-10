const themeToggleButton = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.body.classList.add(currentTheme);
}

themeToggleButton.addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    themeToggleButton.textContent = "🌙";
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light-mode");
    themeToggleButton.textContent = "☀️";
  }
});
