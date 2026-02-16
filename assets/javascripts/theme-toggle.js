// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const navThemeToggle = document.getElementById('navThemeToggle');
    const icon = navThemeToggle.querySelector('i');
    const themeText = navThemeToggle.querySelector('.theme-text');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        if (themeText) themeText.textContent = 'Light Mode';
    }
    
    // Toggle theme on button click - no rotation, just icon swap
    navThemeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            if (themeText) themeText.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            if (themeText) themeText.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Close menu when clicking a link (including theme toggle on mobile)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.nav-overlay');
    
    if (menuToggle && navLinks && overlay) {
        // Don't close menu when clicking theme toggle on mobile
        navThemeToggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.stopPropagation();
            }
        });
    }
});
