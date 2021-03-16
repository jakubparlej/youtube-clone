const hamburger = document.getElementById('menu-btn');
const navMenu = document.querySelector('.nav-menu');
const navBar = document.querySelector('.nav-bar');
const videos = document.querySelector('.videos');

let flag = true;

const toggleMenu = () => {
    if (flag) {
        navMenu.classList.add('disable');
        navBar.classList.remove('disable');
        videos.classList.add('videos--left');
        flag = false;

    } else {
        navMenu.classList.remove('disable');
        navBar.classList.add('disable');
        videos.classList.remove('videos--left');
        flag = true;
    }
}

hamburger.addEventListener('click', toggleMenu);