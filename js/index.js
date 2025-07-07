import { initNavbar } from './navbar.js'
import { initIndexIconHover, initFestivalRowHover } from './hover.js'
import { initNewsFilter } from './news.js';
import { initBrandsLoadMore } from './brands-loadmore.js';

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initIndexIconHover();
    initFestivalRowHover();
    initBrandsLoadMore();
       initNewsFilter();
});
