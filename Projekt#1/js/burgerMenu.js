document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.getElementById('menu');

    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});

