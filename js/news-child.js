export function initNewsChildLoadMore() {
    const loadMoreBtn = document.getElementById('news_load_more');
    const newsLists = document.querySelectorAll('.a965_news_child_list');
    
    if (!loadMoreBtn || !newsLists.length) return;
    
    let visibleLists = 2; 
    const maxLists = newsLists.length;
    const listsPerClick = 2;
    
    function initializeDisplay() {
        newsLists.forEach((list, index) => {
            if (index >= visibleLists) {
                list.style.display = 'none';
            } else {
                list.style.display = 'block';
            }
        });
        updateLoadMoreButton();
    }
    
    function updateLoadMoreButton() {
        if (visibleLists >= maxLists) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
    
    loadMoreBtn.addEventListener('click', function() {
        const listsToShow = Math.min(listsPerClick, maxLists - visibleLists);
        
        for (let i = 0; i < listsToShow; i++) {
            if (visibleLists < maxLists) {
                newsLists[visibleLists].style.display = 'block';
                visibleLists++;
            }
        }
        
        if (visibleLists > 1) {
            setTimeout(() => {
                newsLists[visibleLists - 1].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
        
        updateLoadMoreButton();
    });
    
    initializeDisplay();
}
