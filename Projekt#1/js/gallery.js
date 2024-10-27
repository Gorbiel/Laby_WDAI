// Array of image paths relative to the HTML file
const images = [
    'resources/gallery/Image-01.jpg',
    'resources/gallery/Image-02.jpg',
    'resources/gallery/Image-03.jpg',
    'resources/gallery/Image-04.jpg',
    'resources/gallery/Image-05.jpg',
    'resources/gallery/Image-06.jpg',
    'resources/gallery/Image-07.jpg',
    'resources/gallery/Image-08.jpg',
    'resources/gallery/Image-09.jpg',
    'resources/gallery/Image-10.jpg',
    // TODO python script to generate the paths
];

// Get the gallery container and lightbox elements
const galleryContainer = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.close');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0; // Track the current image index

// Function to show the previous image
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around to last image if needed
    lightboxImage.src = images[currentIndex];
}

// Function to show the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Wrap around to first image if needed
    lightboxImage.src = images[currentIndex];
}

// Function to open lightbox with clicked image
function openLightbox(src) {
    lightboxImage.src = src; // Set the image source
    lightbox.style.display = 'flex'; // Show the lightbox
}

// Function to close lightbox
function closeLightbox() {
    lightboxImage.src = "";
    lightbox.style.display = 'none';
}

// Loop through each image and add it to the gallery
images.forEach(src => {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.alt = src.split('/').pop();
    imgElement.className = 'gallery-image';

    // Add click event to open lightbox with clicked image
    imgElement.addEventListener('click', () => openLightbox(src));
    galleryContainer.appendChild(imgElement);
});

// Event listeners for navigation and closing
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === closeButton) {
        closeLightbox();
    }
});

closeButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to the lightbox
    lightbox.style.display = 'none';
    lightboxImage.src = '';
});

// Event listeners for arrow buttons
leftArrow.addEventListener('click', showPreviousImage);
rightArrow.addEventListener('click', showNextImage);

// Keyboard listener
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && lightbox.style.display === 'flex') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft' && lightbox.style.display === 'flex') {
        showPreviousImage();
    } else if (e.key === 'ArrowRight' && lightbox.style.display === 'flex') {
        showNextImage();
    }
});


