function initNavbar() {
    const hamburger = document.querySelector('.a965_header_hammenu:not(.close)');
    const closeBtn = document.querySelector('.a965_header_hammenu.close');
    const menu = document.querySelector('.off_screen_menu');
    const body = document.body;
    const menuLinks = menu?.querySelectorAll('a[href]');

    if (!hamburger || !closeBtn || !menu) {
        console.error('Navbar elements not found!');
        return;
    }

    function closeMenu() {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
        body.style.overflow = '';
    }

    function openMenu() {
        menu.classList.add('active');
        hamburger.classList.add('active');
        body.style.overflow = 'hidden';
    }

    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openMenu();
    });

    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
    });

    if (menuLinks) {
        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                closeMenu();
            });
        });
    }

    document.addEventListener('click', function(e) {
        const isMenuOpen = menu.classList.contains('active');
        if (isMenuOpen && !menu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            closeMenu();
        }
    });

    menu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

export { initNavbar };