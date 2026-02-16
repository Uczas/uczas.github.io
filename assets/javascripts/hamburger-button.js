// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.nav-overlay');
    const navThemeToggle = document.getElementById('navThemeToggle');
    
    if (!menuToggle || !navLinks || !overlay) return;
    
    function closeMenu() {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    
    function openMenu() {
        menuToggle.classList.add('active');
        navLinks.classList.add('active');
        overlay.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
    
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        const isExpanded = menuToggle.classList.contains('active');
        if (isExpanded) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', closeMenu);
    
    // Close menu when clicking a link (except theme toggle)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Don't close menu when clicking theme toggle on mobile
    if (navThemeToggle) {
        navThemeToggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.stopPropagation();
            }
        });
    }
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
});
