window.addEventListener('scroll', function() {

    let scrollDistance = window.scrollY;
    let navBar = document.querySelector('.navigationbar');
    let logoImg = document.querySelector('.logo-img');
    let whitelogoImg = document.querySelector('.hided-white-logo-img');
    let navLinks = document.querySelectorAll('.navlinks');
    let navCta = document.querySelector('.signup-button');
    let whitenavCta = document.querySelector('.hidden-white-signup-button')
    let profile = document.querySelector('.hidden-white-profile')
    let mooi = document.querySelector('.login-cta')
    let whitehamburger = document.querySelector('.hamburger-img-container')


    if (scrollDistance > 200) {
        navBar.classList.add('scrolled-navbar');
        logoImg.classList.add('hided-logo-img');
        whitelogoImg.classList.add('white-logo-img');
        navLinks.forEach(link => link.classList.add('navigationlinks-white')); 
        navCta.classList.add('hidden-signup-button');
        whitenavCta.classList.add('display-white-signup-button');
        profile.classList.add('white-profile');
        mooi.classList.add('hidden-login-cta');
        whitehamburger.classList.add('display-hamburger-img')
    } else {
        navBar.classList.remove('scrolled-navbar');
        logoImg.classList.remove('hided-logo-img');
        whitelogoImg.classList.remove('white-logo-img');
        navLinks.forEach(link => link.classList.remove('navigationlinks-white')); 
        navCta.classList.remove('hidden-signup-button');
        whitenavCta.classList.remove('display-white-signup-button');
        profile.classList.remove('white-profile');
        mooi.classList.remove('hidden-login-cta');
        whitehamburger.classList.remove('display-hamburger-img')
    }
})


function openRCloseMobileNavBar(action) {

    const navbar = document.querySelector('.navigationbar-sidebar');

    if(action === 'open') {
        navbar.classList.add('displaymobilenavbar')
    } else if (action === 'close') {
        navbar.classList.remove('displaymobilenavbar')
    }
}


function buttonClicked() {
    alert('Scroll down to play all the cool games!!!!')
}