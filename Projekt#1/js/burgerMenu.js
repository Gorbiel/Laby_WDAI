document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.getElementById('menu');

    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});

// JavaScript for device detection and class assignment
function detectDeviceType() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const body = document.querySelector('body');

    // Assign the appropriate class based on device type
    if (isMobile) {
        body.classList.add('mobile');
        body.classList.remove('desktop');
    } else {
        body.classList.add('desktop');
        body.classList.remove('mobile');
    }
}

// Call the function on page load
detectDeviceType()