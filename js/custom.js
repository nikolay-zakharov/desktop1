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
        observer: true,
        observeParents: true,
        init: true,
        on: {
            init: function () {
                setTimeout(() => {
                    this.update();
                    this.pagination.render();
                    this.pagination.update();
                }, 200);
            },
            imagesReady: function (swiper) {
                swiper.update();
            },
        },

        slidesPerGroup: 1,
        cssMode: false,
    });
});
