$(function () {
    $('.about-link, .classes-link').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#about, #classes').offset().top }, 1000);
        e.preventDefault();
    });
    $('.classes-link').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#classes').offset().top }, 1000);
        e.preventDefault();
    });
    $('.prices-link').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#prices').offset().top }, 1000);
        e.preventDefault();
    });
    $('.team-link').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#team').offset().top }, 1000);
        e.preventDefault();
    });
    $('.contact-link').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#contact').offset().top }, 2000);
        e.preventDefault();
    });


    $('#nav-icon1').click(function () {
        $('#nav-icon1').toggleClass('open');
        $('.header__menu').slideToggle(300);
    });


    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

});