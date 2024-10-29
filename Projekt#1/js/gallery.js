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
    'resources/gallery/Image-11.jpg',
    'resources/gallery/Image-12.jpg',
    'resources/gallery/Image-13.jpg',
    'resources/gallery/Image-14.jpg',
    'resources/gallery/Image-15.jpg',
    'resources/gallery/Image-16.jpg',
    'resources/gallery/Image-17.jpg',
    'resources/gallery/Image-18.jpg',
    'resources/gallery/Image-19.jpg',
    'resources/gallery/Image-20.jpg',
    'resources/gallery/Image-21.jpg',
    'resources/gallery/Image-22.jpg',
    'resources/gallery/Image-23.jpg',
    'resources/gallery/Image-24.jpg',
    'resources/gallery/Image-25.jpg',
    'resources/gallery/Image-26.jpg',
    'resources/gallery/Image-27.jpg',
    'resources/gallery/Image-28.jpg',
    'resources/gallery/Image-29.jpg',
    'resources/gallery/Image-30.jpg',
    'resources/gallery/Image-31.jpg',
    'resources/gallery/Image-32.jpg',
    'resources/gallery/Image-33.jpg',
    'resources/gallery/Image-34.jpg',
    'resources/gallery/Image-35.jpg',
    'resources/gallery/Image-36.jpg',
    'resources/gallery/Image-37.jpg',
    'resources/gallery/Image-38.jpg',
    'resources/gallery/Image-39.jpg',
    'resources/gallery/Image-40.jpg',
    'resources/gallery/Image-41.jpg',
    'resources/gallery/Image-42.jpg',
    'resources/gallery/Image-43.jpg',
    'resources/gallery/Image-44.jpg',
    'resources/gallery/Image-45.jpg',
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
    currentIndex = images.indexOf(src); // Update the current index to the opened image
    document.body.classList.add('no-scroll'); // Prevent background scroll
}

// Function to close lightbox
function closeLightbox() {
    lightboxImage.src = "";
    lightbox.style.display = 'none';
    document.body.classList.remove('no-scroll'); // Restore background scroll
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
    closeLightbox();
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

// Swipe detection for mobile devices
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    if (body.classList.contains('mobile')) {
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;
        let isDragging = false;

        // Function to reset image position instantly
        function resetImagePosition() {
            lightboxImage.style.transition = 'transform 0.1s ease';
            lightboxImage.style.transform = 'translate(0, 0)'; // Reset to original position
        }

        // Function to handle horizontal swipe for image navigation
        function handleHorizontalSwipe() {
            const diffX = startX - currentX;
            if (Math.abs(diffX) > 300) { // Threshold for swipe completion
                if (diffX > 0) {
                    showNextImage(); // Swipe left
                } else {
                    showPreviousImage(); // Swipe right
                }
            }
        }

        // Function to handle vertical swipe to close lightbox
        function handleVerticalSwipe() {
            const diffY = startY - currentY;
            if (Math.abs(diffY) > 300) { // Threshold for swipe completion
                closeLightbox(); // Swipe up or down to close
            }
        }

        // Start of touch event
        lightbox.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            currentX = startX;
            currentY = startY;
            isDragging = true;
            lightboxImage.style.transition = 'none'; // Disable transition while dragging
        });

        // During touch event
        lightbox.addEventListener('touchmove', (e) => {
            if (isDragging) {
                currentX = e.touches[0].clientX;
                currentY = e.touches[0].clientY;
                const diffX = currentX - startX;
                const diffY = currentY - startY;
                lightboxImage.style.transform = `translate(${diffX}px, ${diffY}px)`; // Move image with finger
            }
        });

        // End of touch event
        lightbox.addEventListener('touchend', () => {
            if (isDragging) {
                isDragging = false;
                handleHorizontalSwipe(); // Check for horizontal swipe
                handleVerticalSwipe(); // Check for vertical swipe
                resetImagePosition(); // Instantly reset the position after swipe check
            }
        });
    }
});