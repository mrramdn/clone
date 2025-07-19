function initNavbar() {
  const header = document.querySelector('.main-header');
  const menu = document.getElementById('main-menu');
  const hamburger = document.querySelector('.main-header__toggle:not(.main-header__toggle--close)');
  const closeBtn = document.querySelector('.main-header__toggle--close');
  const logo = header.querySelector('.main-header__logo img');
  const body = document.body;

  if (!header || !menu || !hamburger || !closeBtn) return;

  const isTransparent = header.classList.contains('navbar-transparent');

  // Scroll functionality
  let lastScrollY = window.scrollY;
  
  function handleScroll() {
    const currentScrollY = window.scrollY;
    
    if (isTransparent) {
      // Add scrolled class when scrolling down
      if (currentScrollY > 50) {
        header.classList.add('navbar--scrolled');
      } else {
        header.classList.remove('navbar--scrolled');
      }
    }
    
    // Hide/show navbar based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down - hide navbar
      header.classList.add('navbar--offscreen');
    } else {
      // Scrolling up - show navbar
      header.classList.remove('navbar--offscreen');
    }
    
    lastScrollY = currentScrollY;
  }

  // Event listeners
  window.addEventListener('scroll', handleScroll);

  function openMenu() {
    menu.classList.add('active');
    hamburger.classList.add('active');
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.width = '100vw';
    body.style.top = `-${window.scrollY}px`;
    body.dataset.scrollY = window.scrollY;
  }

  function closeMenu() {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
    const scrollY = body.dataset.scrollY || '0';
    body.style.overflow = '';
    body.style.position = '';
    body.style.width = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY));
  }

  hamburger.addEventListener('click', e => {
    e.preventDefault();
    openMenu();
  });

  closeBtn.addEventListener('click', e => {
    e.preventDefault();
    closeMenu();
  });

  document.addEventListener('click', e => {
    if (
      menu.classList.contains('active') &&
      !menu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      closeMenu();
    }
  });

  // Auto close menu on link click
  const navLinks = menu.querySelectorAll('a[href]');
  navLinks.forEach(link => {
    link.addEventListener('click', () => closeMenu());
  });

  // Offscreen functionality
  function toggleOffscreen() {
    header.classList.toggle('navbar--offscreen');
  }

  // Make offscreen function available globally if needed
  window.toggleNavbarOffscreen = toggleOffscreen;
}

export { initNavbar };
