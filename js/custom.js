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
        freeMode: true,
        freeModeSticky: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        observer: true,
        observeParents: true,
        init: true,
        on: {
            imagesReady: function (swiper) {
                swiper.update();
            },
        },
    });
});
