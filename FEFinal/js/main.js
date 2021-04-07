$(document).ready(function () {

    const burgerBf = document.querySelector('.line-before');
    const burgerAf = document.querySelector('.line-after');
    const centerLine = $('.main-burger-line');
    const menuNav = $('.menu-nav');
    const header = $('header');

    let menuOpen = false;
    function closeburger(){
        $('.menu-btn').removeClass('open');

        setTimeout(function () {
            burgerBf.style.top = "6px"
            burgerAf.style.bottom = "6px"
            centerLine.removeClass('open');
        }, 500);
        menuOpen = false;
        menuNav.removeClass('shown');
        $('body').removeClass('hidden-scroll');
    }

    $('.menu-btn').click(function () {
        if (!menuOpen) {
            menuOpen = true;
            menuNav.addClass('shown');
            $('body').addClass('hidden-scroll');

            burgerBf.style.top = "0px"
            burgerAf.style.bottom = "0px"
            centerLine.addClass('open');

            setTimeout(function () {
                $('.menu-btn').addClass('open');
            }, 400);

        } else {
          closeburger();
        }

    });


    ///Mobile-menu links click
    
 function Hide(){
    menuOpen = false;
    menuNav.removeClass('shown');
    $('body').removeClass('hidden-scroll');
 }
 

  $('.nav-mobile-link').each(function () {
      let link = $(this).attr('data-link');
     $(this).on('click', function() {
        $("html, body").animate({
            scrollTop: parseInt($(`${link}`).offset().top)-80
          }, 10);
        closeburger();
      });
 })

    



    if (window.scrollY > 100) {
        header.addClass('scrolled-nav');
    } else {
        header.removeClass('scrolled-nav');
    }


    function Counter(div, n) {
        let i = 0;
        let interval;
        let plus = 0.1;
        if (n > 100) plus = 1;
        let time = ((200 / n).toFixed(2) * 100) / 200;
        interval = setInterval(function () {
            i += plus;
            if (n % 1 !== 0) {
                div.html(i.toFixed(1));
            } else {
                div.html(i.toFixed(0));
            }

            if (i >= n) {
                clearInterval(interval);
            }

        }, time);

    }

    document.addEventListener('scroll', (e) => {
        const scrolledPixels = window.scrollY;

        if (scrolledPixels > 0) {
            if (scrolledPixels > 100) {
                header.addClass('scrolled-nav');
            } else {
                header.removeClass('scrolled-nav');
            }

        }

        //Animation on scroll
        $('section').each(function () {
            let mid = $(window).scrollTop() + Math.floor($(window).height() / 2);

            if ($(this).offset().top - 110 <= mid && !$(this).hasClass('animate')) {
                console.log('1')
                $(this).addClass('animate');

                if ($(this).hasClass('who-we-are')) {
                    let endNums = [220, 20, 3.1, 30, 25, 10.2];

                    $('.number').each(function (index) {
                        Counter($(this), endNums[index]);
                    })
                }
            }

            if (window.scrollY > $(this).position().top - 100) {
                let id = '#' + $(this).attr("id")
                if (id !== '#undefined') {
                    let link = ($(`[href="${id}"]`));

                    if (!link.hasClass('active')) {
                        $('.active').removeClass('active');
                        link.addClass('active');
                    }

                }

            }

        });
        ///

    });

    ///MAP 

    $('circle').each(function () {

        let circle = $(this);
        let city = circle.attr('data-city');
        let cityPath = $(`#${city}`);
        let tooltipX = circle.attr('cx');
        let tooltipY = circle.attr('cy') - 160;
        let source = `./assets/images/flags/${city}.png`;


        function cityEnter() {
            cityPath.addClass('active');
            $('.country-tooltip').css({ "left": `${tooltipX}px`, "top": `${tooltipY}px`, "display": "flex" });
            $('#country-title').html(`${cityPath.attr('title')}`);
            console.log(source);
            $('.country-tooltip img').attr("src", `${source}`);
        };
        function cityLeave() {
            cityPath.removeClass('active');
            $('.country-tooltip').css({ "display": "none" });
        };

        circle.mouseenter(cityEnter).mouseleave(cityLeave);
        cityPath.mouseenter(cityEnter).mouseleave(cityLeave);



    })

    ///

///Card clicks
$('.my-card').each(function(){
    let article = $(this).attr('data-article');
    $(this).click(function () {
        location.href = `${article}`;
    })
  
})
///

///City slider
$('.city-link').each(function(){
    $(this).click(function(){
        if(!$(this).hasClass('active-link')){

            $('.active-link').removeClass('active-link');
            $(this).addClass('active-link');

            let city = $(this).attr('data-target');
            $('.active-city').removeClass('active-city');
            $(`${city}`).addClass('active-city');
            
        }
    })
})

///

///Team mobile click///
$('.nav-mob').click(
    function (event) {
        event.preventDefault();
        if(!$('#team-section').hasClass('mobile')){
            $('#team-section').addClass('mobile');
            closeburger();
            $('header').removeClass('sticky-top');
        }
    }
)

$('.close-btn').click(function () {
    $('header').addClass('sticky-top');
    $('#team-section').removeClass('mobile');
})

});




