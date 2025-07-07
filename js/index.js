import { initNavbar } from './navbar.js'
import { initIndexIconHover, initFestivalRowHover } from './hover.js'
import { initNewsFilter } from './news.js';
import { initBrandsLoadMore } from './brands-loadmore.js';
import { initNewsChildLoadMore } from './news-child.js';
import { initImageOverlay } from './image-overlay.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - initializing all modules...');
    initNavbar();
    initIndexIconHover();
    initFestivalRowHover();
    initBrandsLoadMore();
    initNewsChildLoadMore();
    initImageOverlay()

    setTimeout(() => {
        console.log('Initializing image overlay...');
        const imageOverlay = initImageOverlay();
        imageOverlay.init();
    }, 100);

    initNewsFilter();
    
});
