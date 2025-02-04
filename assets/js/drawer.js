document.addEventListener('DOMContentLoaded', function() {
    const drawer = document.querySelector('.drawer');
    const drawerToggle = document.querySelector('.drawer-toggle');
    const drawerClose = document.querySelector('.drawer-close');
    const drawerOverlay = document.querySelector('.drawer-overlay');
    const dropdownItems = document.querySelectorAll('.drawer-menu .dropdown');

    // Toggle drawer
    function toggleDrawer() {
        drawer.classList.toggle('active');
        drawerOverlay.classList.toggle('active');
        document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
    }

    // Close drawer
    function closeDrawer() {
        drawer.classList.remove('active');
        drawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners
    drawerToggle.addEventListener('click', toggleDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);

    // Close drawer on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && drawer.classList.contains('active')) {
            closeDrawer();
        }
    });

    // Handle dropdown menus
    dropdownItems.forEach(item => {
        const link = item.querySelector('a');
        const menu = item.querySelector('.dropdown-menu');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Close drawer on window resize if screen becomes larger than 768px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && drawer.classList.contains('active')) {
            closeDrawer();
        }
    });
});
