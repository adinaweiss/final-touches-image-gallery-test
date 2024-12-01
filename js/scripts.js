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
