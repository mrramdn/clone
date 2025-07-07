
export function initNewsFilter() {
  const filterLinks = document.querySelectorAll('.a965_news_filter a');
  const newsItems = document.querySelectorAll('.a965_news_item');
  const loadMoreBtn = document.getElementById('news_load_more');
  const ITEMS_PER_PAGE = 5;

  function getFilteredCount() {
    let filter = document.querySelector('.a965_news_filter a.active').getAttribute('data-filter');
    if (filter === 'all') return newsItems.length;
    return Array.from(newsItems).filter(item => item.getAttribute('data-category') === filter).length;
  }

  function getVisibleCount() {
    return Array.from(newsItems).filter(item => item.style.display !== 'none').length;
  }

  function updateCounts() {
    filterLinks.forEach(link => {
      const filter = link.getAttribute('data-filter');
      let count = 0;
      if (filter === 'all') {
        count = newsItems.length;
      } else {
        count = Array.from(newsItems).filter(item => item.getAttribute('data-category') === filter).length;
      }
      const countSpan = link.querySelector('.filter-count');
      if (countSpan) countSpan.textContent = count;
    });
  }

  function updateIndexes() {
    let idx = 1;
    newsItems.forEach(item => {
      const indexSpan = item.querySelector('.news_index');
      if (item.style.display !== 'none') {
        if (indexSpan) indexSpan.textContent = idx++;
      } else {
        if (indexSpan) indexSpan.textContent = '';
      }
    });
  }

  function applyFilter(filter) {
    let shown = 0;
    newsItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        if (shown < ITEMS_PER_PAGE) {
          item.style.display = '';
          shown++;
        } else {
          item.style.display = 'none';
        }
      } else {
        item.style.display = 'none';
      }
    });
    updateIndexes();
    updateCounts();
    if (getVisibleCount() < getFilteredCount()) {
      loadMoreBtn.style.display = '';
    } else {
      loadMoreBtn.style.display = 'none';
    }
  }

  filterLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      filterLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');
      applyFilter(filter);
    });
  });

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      let filter = document.querySelector('.a965_news_filter a.active').getAttribute('data-filter');
      let added = 0;
      for (let i = 0; i < newsItems.length; i++) {
        if ((filter === 'all' || newsItems[i].getAttribute('data-category') === filter) && newsItems[i].style.display === 'none' && added < ITEMS_PER_PAGE) {
          newsItems[i].style.display = '';
          added++;
        }
      }
      updateIndexes();
      if (getVisibleCount() >= getFilteredCount()) {
        loadMoreBtn.style.display = 'none';
      }
    });
  }

  applyFilter('all');
}
