const burgerBf = document.querySelector('.line-before');
const burgerAf = document.querySelector('.line-after');
const menuNav = $('.menu-nav');
const header = $('header');

let menuOpen = false;

$('.menu-btn').click(function(){
    if (!menuOpen) {
        menuOpen = true;
        menuNav.addClass('shown');
        $('body').addClass('hidden-scroll');
        burgerBf.style.top = "0px"
        burgerAf.style.bottom = "0px"

        setTimeout(function () {
            $('.menu-btn').addClass('open');
        }, 200);
    }else{
        $('.menu-btn').removeClass('open');
        menuNav.removeClass('shown');
        $('body').removeClass('hidden-scroll');

        setTimeout(function () {
            burgerBf.style.top = "6px"
            burgerAf.style.bottom = "6px"
        }, 200);
        menuOpen = false;
    }

});
document.addEventListener('scroll', (e) => {

    const scrolledPixels = window.scrollY;

    if (scrolledPixels > 0) {
        if (scrolledPixels > 100) {
            header.addClass('scrolled-nav');
        } else {
            header.removeClass('scrolled-nav');
        }

    }
});
