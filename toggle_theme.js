
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  // Save the theme preference to localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('isDarkMode', isDarkMode);
});

// Check for theme preference on page load
const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
if (isDarkMode) {
  document.body.classList.add('dark-mode');
}
