import Swiper from 'swiper';

export default function() {
    const galleries = Array.from(document.querySelectorAll('.js-gallery'));

    galleries.forEach(element => {
        const mainSliderContainer = element.querySelector('.text__article-gallery-block-main-slider .swiper-container');
        const thumbsSliderContainer = element.querySelector('.text__article-gallery-block-thumbs-slider .swiper-container');

        const options = {
            navigation: {
                prevEl: element.querySelector('.text__article-gallery-block-arrow--prev'),
                nextEl: element.querySelector('.text__article-gallery-block-arrow--next')
            },
            thumbs: {},
            watchOverflow: true,
        };

        options.thumbs.swiper = new Swiper(thumbsSliderContainer, {
            slidesPerView: 5,
            spaceBetween: 14,
            threshold: 10,
            watchSlidesVisibility: true,
            slideToClickedSlide: true,
            watchSlidesProgress: true,
            breakpoints: {
                577: {
                    slidesPerView: 6,
                    spaceBetween: 22
                },
                768: {
                    slidesPerView: 7,
                    spaceBetween: 22
                },
                1024: {
                    slidesPerView: 7,
                    spaceBetween: 22
                },
                1200: {
                    slidesPerView: 8,
                    spaceBetween: 22
                }
            }
        });


        new Swiper(mainSliderContainer, options);
    });
}
