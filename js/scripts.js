/*
// Open the lightbox
function openLightbox(src) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = '100vw';
    lightbox.style.height = '100vh';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = 1000;

    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.borderRadius = '10px';

    lightbox.appendChild(img);
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
}

// Attach lightbox functionality to images
document.querySelectorAll('#gallery img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src));
});
// Select the lightbox and its elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-content .close');

// Attach click event to each gallery image
document.querySelectorAll('#gallery img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src; // Set lightbox image source
        lightbox.classList.add('visible'); // Show the lightbox
    });
});

// Close the lightbox when clicking the close button
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('visible');
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('visible');
    }
});
// Select elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-content .close');
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');
const images = Array.from(document.querySelectorAll('#gallery img')); // Convert NodeList to array
let currentIndex = -1;

// Show lightbox with selected image
function showLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightbox.classList.add('visible');
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('visible');
}

// Navigate to previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showLightbox(currentIndex);
}

// Navigate to next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showLightbox(currentIndex);
}

// Event listeners for gallery images
images.forEach((img, index) => {
    img.addEventListener('click', () => showLightbox(index));
});

// Event listeners for lightbox controls
closeBtn.addEventListener('click', closeLightbox);
prevArrow.addEventListener('click', prevImage);
nextArrow.addEventListener('click', nextImage);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('visible')) {
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'Escape') closeLightbox();
    }
});
*/
document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-content .close');
    const prevArrow = document.querySelector('.arrow.prev');
    const nextArrow = document.querySelector('.arrow.next');
    const images = Array.from(document.querySelectorAll('#gallery img')); // Convert NodeList to array
    let currentIndex = -1;

    // Show lightbox with the selected image
    function showLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        lightbox.classList.remove('hidden'); // Show the lightbox
        lightbox.classList.add('visible'); // For visibility styles
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('visible');
        lightbox.classList.add('hidden'); // Hide the lightbox
    }

    // Navigate to previous image
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to last if at first
        showLightbox(currentIndex);
    }

    // Navigate to next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop to first if at last
        showLightbox(currentIndex);
    }

    // Event listeners for gallery images
    images.forEach((img, index) => {
        img.addEventListener('click', () => showLightbox(index));
    });

    // Event listeners for lightbox controls
    closeBtn.addEventListener('click', closeLightbox);
    prevArrow.addEventListener('click', prevImage);
    nextArrow.addEventListener('click', nextImage);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('visible')) {
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeLightbox();
        }
    });
});
