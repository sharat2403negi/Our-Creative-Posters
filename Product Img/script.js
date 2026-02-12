// script.js
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

// Open Lightbox
gallery.addEventListener('click', (e) => {
    const clickedItem = e.target.closest('.item img');
    if (clickedItem) {
        lightboxImg.src = clickedItem.src;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Stop scrolling
    }
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
});

// Close when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});