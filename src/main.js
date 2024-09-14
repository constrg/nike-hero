const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const navCenter = document.querySelector('.nav-center');
const navCenterItems = document.querySelectorAll('.nav-center');
const heroImg = document.querySelector('.hero-img');
const hero = document.querySelector('.hero');
const heroImgName = document.querySelector('.hero-img-name');
const search = document.querySelector('.search');
const searchInput = document.querySelector('.search-input');
const hamburberMenuBtn = document.querySelector('.hamburger-menu-btn');
const account = document.querySelector('.account');

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

let lastScrollTop = 0;
const handleNav = () => {
    const currentScrollTop = window.scrollY;

    if(currentScrollTop > lastScrollTop) {
        nav.classList.add('hide-nav');
        nav.classList.remove('nav-active');
    } else if(currentScrollTop === 0) {
        nav.classList.remove('hide-nav');
        nav.classList.remove('nav-active');
    } else {
        nav.classList.remove('hide-nav');
        nav.classList.add('nav-active');
    }

    lastScrollTop = currentScrollTop;
}

window.addEventListener('scroll', handleNav);

const handleResize = () => {
    if(window.innerWidth > 834)
    {
        navCenter.classList.remove('show-nav-center');
    }
};

window.addEventListener('resize', handleResize);

handleResize();

const updateHeroSection = (src, alt, bgColor, name) => {
    heroImg.src = src;
    heroImg.alt = alt;
    hero.style.backgroundColor = bgColor;
    heroImgName.textContent = name;
};

const nikeItem1 = () => updateHeroSection('./src/assets/images/nike-1.png', 'nike-1', '#d90000', 'NIKE-1');
const nikeItem2 = () => updateHeroSection('./src/assets/images/nike-2.png', 'nike-2', '#05bb66', 'NIKE-2');
const nikeItem3 = () => updateHeroSection('./src/assets/images/nike-3.png', 'nike-3', '#eeae00', 'NIKE-3');
const nikeItem4 = () => updateHeroSection('./src/assets/images/nike-4.png', 'nike-4', '#7d6051', 'NIKE-4');

const showSearch = () => {
    search.classList.add('show-search');
    body.classList.add('body-hidden');
}
const closeSearch = () => {
    search.classList.remove('show-search');
    searchInput.value = '';
    body.classList.remove('body-hidden');
}

const handleSearch = () => {
    search.classList.remove('show-search');
    searchInput.value = '';
}

const showNavCenter = () => {
    navCenter.classList.add('show-nav-center');
    body.classList.add('body-hidden');
}
const closeNavCenter = () => {
    navCenter.classList.remove('show-nav-center');
    body.classList.remove('body-hidden');
}

const showAlert = () => alert('DISCOVER MORE');

const showAccountAction = () => {
    account.classList.toggle('show-account-action');
}

navCenterItems.forEach(e => e.addEventListener('click', () => {
    navCenter.classList.remove('show-nav-center');
    body.classList.remove('body-hidden');
}));
