import Swiper from 'swiper';

export default function() {
    const coursesTopSliders = Array.from(document.querySelectorAll('.js-courses-top-slider'));

    coursesTopSliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 18,
            watchOverflow: true,
            navigation: {
                nextEl: element.querySelector('.courses__top-slider-arrow--next'),
                prevEl: element.querySelector('.courses__top-slider-arrow--prev')
            },
            breakpoints: {
                577: {
                    slidesPerView: 2,
                    spaceBetween: 48
                }
            }
        });
    });

    const coursesBottomSliders = Array.from(document.querySelectorAll('.js-courses-bottom-slider'));

    coursesBottomSliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            slidesPerView: 'auto',
            spaceBetween: 14,
            navigation: {
                nextEl: element.querySelector('.courses__bottom-slider-arrow--next'),
                prevEl: element.querySelector('.courses__bottom-slider-arrow--prev')
            },

            breakpoints: {
                577: {
                    slidesPerView: 3,
                    spaceBetween: 50
                }
            }
        });
    });
}
