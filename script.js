const arrow = document.querySelector('.hamburger');
const nav = document.querySelector('nav')

arrow.addEventListener('click', function () {
    arrow.classList.toggle('on');
    nav.classList.toggle('on');
})