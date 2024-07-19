document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
  
    mobileMenu.addEventListener('click', function() {
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        menuOpen.style.display = 'block';
        menuClose.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        menuOpen.style.display = 'none';
        menuClose.style.display = 'block';
      }
    });
  
    const dropdowns = document.querySelectorAll('nav ul li i');
  
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('click', function(event) {
        const submenu = this.nextElementSibling.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation();
      });
    });
  
    document.addEventListener('click', function() {
      dropdowns.forEach(function(dropdown) {
        const submenu = dropdown.nextElementSibling.nextElementSibling;
        submenu.style.display = 'none';
      });
    });
  });
  