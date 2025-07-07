export function initImageOverlay() {
    console.log('Image overlay initializing...');
    
    let currentImageIndex = 0;
    let imageList = [];
    let zoomLevel = 1;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let translateX = 0;
    let translateY = 0;

    function createOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'image-overlay';
        overlay.innerHTML = `
            <div class="image-overlay-backdrop"></div>
            <div class="image-overlay-controls">
                <button class="overlay-btn close-btn" aria-label="Close">
                    <img src="../../images/logo-icons/Close Button.svg" alt="Close">
                </button>
                <button class="overlay-btn zoom-in-btn" aria-label="Zoom In">
                    <img src="../../images/logo-icons/Zoom In Button.svg" alt="Zoom In">
                </button>
                <button class="overlay-btn zoom-out-btn" aria-label="Zoom Out">
                    <img src="../../images/logo-icons/Zoom Out Button.svg" alt="Zoom Out">
                </button>
                <button class="overlay-btn prev-btn" aria-label="Previous">
                    <img src="../../images/logo-icons/Previous Arrow.svg" alt="Previous">
                </button>
                <button class="overlay-btn next-btn" aria-label="Next">
                    <img src="../../images/logo-icons/Next Arrow.svg" alt="Next">
                </button>
            </div>
            <div class="image-overlay-container">
                <img class="overlay-image" src="" alt="">
            </div>
        `;
        document.body.appendChild(overlay);
        return overlay;
    }

    function collectImages() {
        const newsItems = document.querySelectorAll('.a965_news_child_item');
        console.log('Found news items:', newsItems.length);
        const images = [];
        
        newsItems.forEach((item, index) => {
            const href = item.getAttribute('href');
            console.log(`Item ${index}: href =`, href);
            if (href && (href.includes('.png') || href.includes('.jpg') || href.includes('.jpeg'))) {
                images.push({
                    src: href,
                    alt: `News article image ${index + 1}`,
                    element: item,
                    index: index
                });
            }
        });
        
        console.log('Collected images:', images.length);
        return images;
    }

    function showOverlay(imageIndex) {
        console.log('Showing overlay for image:', imageIndex);
        const overlay = document.querySelector('.image-overlay') || createOverlay();
        const overlayImage = overlay.querySelector('.overlay-image');
        
        currentImageIndex = imageIndex;
        const currentImage = imageList[currentImageIndex];
        
        console.log('Current image:', currentImage);
        
        overlayImage.src = currentImage.src;
        overlayImage.alt = currentImage.alt;
        
        zoomLevel = 1;
        translateX = 0;
        translateY = 0;
        updateImageTransform(overlayImage);
        
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        console.log('Overlay should be visible now');
        updateNavigationButtons();
    }

    function hideOverlay() {
        const overlay = document.querySelector('.image-overlay');
        if (overlay) {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    function updateImageTransform(image) {
        image.style.transform = `scale(${zoomLevel}) translate(${translateX}px, ${translateY}px)`;
    }

    function updateNavigationButtons() {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        if (prevBtn) prevBtn.style.opacity = currentImageIndex > 0 ? '1' : '0.5';
        if (nextBtn) nextBtn.style.opacity = currentImageIndex < imageList.length - 1 ? '1' : '0.5';
    }

    function showPreviousImage() {
        if (currentImageIndex > 0) {
            showOverlay(currentImageIndex - 1);
        }
    }

    function showNextImage() {
        if (currentImageIndex < imageList.length - 1) {
            showOverlay(currentImageIndex + 1);
        }
    }

    function zoomIn() {
        const overlayImage = document.querySelector('.overlay-image');
        if (zoomLevel < 3) {
            zoomLevel += 0.2;
            updateImageTransform(overlayImage);
        }
    }

    function zoomOut() {
        const overlayImage = document.querySelector('.overlay-image');
        if (zoomLevel > 0.5) {
            zoomLevel -= 0.2;
            if (zoomLevel <= 1) {
                translateX = 0;
                translateY = 0;
            }
            updateImageTransform(overlayImage);
        }
    }

    function initDrag() {
        const overlayImage = document.querySelector('.overlay-image');
        if (!overlayImage) return;

        overlayImage.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', endDrag);
    }

    function startDrag(e) {
        if (zoomLevel > 1) {
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            document.querySelector('.overlay-image').style.cursor = 'grabbing';
        }
    }

    function drag(e) {
        if (isDragging && zoomLevel > 1) {
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            updateImageTransform(document.querySelector('.overlay-image'));
        }
    }

    function endDrag() {
        isDragging = false;
        const overlayImage = document.querySelector('.overlay-image');
        if (overlayImage) {
            overlayImage.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
        }
    }

    function addEventListeners() {
        console.log('Adding event listeners to', imageList.length, 'items');
        
        document.addEventListener('click', (e) => {
            const newsItem = e.target.closest('.a965_news_child_item');
            if (newsItem) {
                const href = newsItem.getAttribute('href');
                if (href && (href.includes('.png') || href.includes('.jpg') || href.includes('.jpeg'))) {
                    console.log('News item clicked, preventing default and showing overlay');
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    
                    const index = imageList.findIndex(img => img.element === newsItem);
                    if (index !== -1) {
                        showOverlay(index);
                    }
                    return false;
                }
            }
            
            if (e.target.closest('.close-btn') || e.target.classList.contains('image-overlay-backdrop')) {
                hideOverlay();
            } else if (e.target.closest('.zoom-in-btn')) {
                zoomIn();
            } else if (e.target.closest('.zoom-out-btn')) {
                zoomOut();
            } else if (e.target.closest('.prev-btn')) {
                showPreviousImage();
            } else if (e.target.closest('.next-btn')) {
                showNextImage();
            }
        }, true);

        document.addEventListener('keydown', (e) => {
            const overlay = document.querySelector('.image-overlay');
            if (overlay && overlay.style.display === 'flex') {
                switch (e.key) {
                    case 'Escape':
                        hideOverlay();
                        break;
                    case 'ArrowLeft':
                        showPreviousImage();
                        break;
                    case 'ArrowRight':
                        showNextImage();
                        break;
                    case '+':
                    case '=':
                        zoomIn();
                        break;
                    case '-':
                        zoomOut();
                        break;
                }
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.closest('.image-overlay') && !document.querySelector('.overlay-image').hasAttribute('data-drag-init')) {
                initDrag();
                document.querySelector('.overlay-image').setAttribute('data-drag-init', 'true');
            }
        });
    }

    function init() {
        console.log('Image overlay init called');
        imageList = collectImages();
        console.log('Image list collected:', imageList);
        if (imageList.length > 0) {
            addEventListeners();
            console.log('Event listeners added successfully');
        } else {
            console.warn('No images found to initialize overlay');
        }
    }

    return {
        init,
        showOverlay,
        hideOverlay
    };
}
