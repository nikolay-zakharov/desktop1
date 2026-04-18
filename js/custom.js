document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.production-slider', {
        slidesPerView: 2.4,
        centeredSlides: false,
        spaceBetween: 30,
        loop: false,
        initialSlide: 0,
        watchOverflow: true,
        slidesOffsetBefore: 480,
        slidesOffsetAfter: 220,
        freeMode: {
            enabled: true,
            sticky: true,
            momentum: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    new Swiper('.portfolio-slider', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        loop: false,
        initialSlide: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
