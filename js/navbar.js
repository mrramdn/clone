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
        body.style.position = '';
        body.style.touchAction = '';
        body.style.overscrollBehavior = '';
    }

    function openMenu() {
        menu.classList.add('active');
        hamburger.classList.add('active');
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.touchAction = 'none';
        body.style.overscrollBehavior = 'none';
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

    // Sticky navbar show/hide on scroll
    let lastScrollY = window.scrollY;
    const header = document.getElementById('a965_header');
    let ticking = false;

    function onScroll() {
        if (!header) return;
        const currentScrollY = window.scrollY;
        const logo = header.querySelector('.header_logo img');
        const isTransparent = header.classList.contains('navbar-transparent');
        const hamburgerMenu = header.querySelector('.a965_header_hammenu:not(.close)');
        
        const isMenuOpen = menu.classList.contains('active');
        
        if (currentScrollY > 50) {
            header.classList.add('navbar--scrolled');
            
            if (isTransparent && logo && logo.src.includes('Logo-white.svg')) {
                logo.src = logo.src.replace('Logo-white.svg', 'Logo.svg');
            }
            
            if (!isMenuOpen && hamburgerMenu) {
                hamburgerMenu.style.setProperty('--hamburger-color', '#151515', 'important');
            }
        } else {
            header.classList.remove('navbar--scrolled');
            
            if (isTransparent && logo && logo.src.includes('Logo.svg') && !logo.src.includes('Logo-white.svg')) {
                logo.src = logo.src.replace('Logo.svg', 'Logo-white.svg');
            }
            
            if (!isMenuOpen && hamburgerMenu) {
                hamburgerMenu.style.removeProperty('--hamburger-color');
            }
        }
        
        if (currentScrollY <= 0) {
            header.classList.remove('navbar--hidden');
            header.classList.add('navbar--visible');
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            if (!header.classList.contains('navbar--hidden')) {
                header.classList.remove('navbar--visible');
                header.classList.add('navbar--hidden');
            }
        } else if (currentScrollY < lastScrollY) {
            if (!header.classList.contains('navbar--visible')) {
                header.classList.remove('navbar--hidden');
                header.classList.add('navbar--visible');
            }
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
    if (header) header.classList.add('navbar--visible');
}

export { initNavbar };