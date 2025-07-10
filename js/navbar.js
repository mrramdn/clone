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

    // Sticky navbar show/hide on scroll
    let lastScrollY = window.scrollY;
    const header = document.getElementById('a965_header');
    let ticking = false;

    function onScroll() {
        if (!header) return;
        const currentScrollY = window.scrollY;
        const logo = header.querySelector('.header_logo img');
        const isTransparent = header.classList.contains('navbar-transparent');
        
        if (currentScrollY > 50) {
            header.classList.add('navbar--scrolled');
            console.log('Added navbar--scrolled class');
            
            if (isTransparent && logo && logo.src.includes('Logo-white.svg')) {
                logo.src = logo.src.replace('Logo-white.svg', 'Logo.svg');
                console.log('Changed logo to black');
            }
        } else {
            header.classList.remove('navbar--scrolled');
            console.log('Removed navbar--scrolled class');
            
            if (isTransparent && logo && logo.src.includes('Logo.svg') && !logo.src.includes('Logo-white.svg')) {
                logo.src = logo.src.replace('Logo.svg', 'Logo-white.svg');
                console.log('Changed logo to white');
            }
        }
        
        if (currentScrollY <= 0) {
            header.classList.remove('navbar--hidden');
            header.classList.add('navbar--visible');
        } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
            header.classList.remove('navbar--visible');
            header.classList.add('navbar--hidden');
        } else {
            header.classList.remove('navbar--hidden');
            header.classList.add('navbar--visible');
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