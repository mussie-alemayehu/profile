// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      html.setAttribute('data-bs-theme', savedTheme);
      updateIcon(savedTheme === 'dark');
    }
  
    themeToggle.addEventListener('click', () => {
      const isDark = html.getAttribute('data-bs-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      
      html.setAttribute('data-bs-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateIcon(!isDark);
    });
  
    function updateIcon(isDark) {
      themeIcon.className = isDark ? 'fas fa-sun fs-5' : 'fas fa-moon fs-5';
    }
  });