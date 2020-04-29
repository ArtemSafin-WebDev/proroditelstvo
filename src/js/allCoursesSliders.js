import Swiper from 'swiper';

export default function() {
    const allCoursesTopSliders = Array.from(document.querySelectorAll('.js-all-courses-slider'));

    allCoursesTopSliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            spaceBetween: 114,
            navigation: {
                nextEl: element.querySelector('.all-courses__slider-arrow--next'),
                prevEl: element.querySelector('.all-courses__slider-arrow--prev')
            }
        });
    });
}
