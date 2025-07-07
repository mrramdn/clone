export function initBrandsLoadMore() {
    console.log('DOM loaded, initializing load more...');
    
    const loadMoreBtn = document.getElementById('brands_load_more');
    const brandsList = document.querySelectorAll('.a965_brand_index_list');
    
    if (loadMoreBtn && brandsList.length > 0) {
        const itemsPerLoad = 5;
        let currentVisible = itemsPerLoad;
        const totalItems = brandsList.length;
        
        for (let i = itemsPerLoad; i < brandsList.length; i++) {
            brandsList[i].style.display = 'none';
        }
        
        loadMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const nextVisible = Math.min(currentVisible + itemsPerLoad, totalItems);
            
            for (let i = currentVisible; i < nextVisible; i++) {
                if (brandsList[i]) {
                    brandsList[i].style.display = 'flex';
                }
            }
            
            currentVisible = nextVisible;
            
            if (currentVisible >= totalItems) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }
}
