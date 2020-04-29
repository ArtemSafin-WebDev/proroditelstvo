import Swiper from 'swiper';

export default function() {
    const allCoursesTopSliders = Array.from(document.querySelectorAll('.js-all-courses-slider'));

    allCoursesTopSliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            spaceBetween: 18,
            navigation: {
                nextEl: element.querySelector('.all-courses__slider-arrow--next'),
                prevEl: element.querySelector('.all-courses__slider-arrow--prev')
            },
            breakpoints: {

                569: {
                    slidesPerView: 1,
                    spaceBetween: 60,
                },
                1025: {
                    slidesPerView: 1,
                    spaceBetween: 90
                },
                1201: {
                    slidesPerView: 1,
                    spaceBetween: 108,
                }
            }
        });
    });
}
