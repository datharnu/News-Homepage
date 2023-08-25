const menuIcon = document.querySelector('.menu-icon');
const menuInfo = document.querySelector('.menu-info');
const closeMenu = document.querySelector('.close-menu');
menuIcon.addEventListener('click', menuToggle);

function menuToggle() {
    menuInfo.classList.toggle('hide');
    console.log('hello');
}

closeMenu.addEventListener('click', closeToggle);

function closeToggle() {
    menuInfo.classList.add('hide');
}