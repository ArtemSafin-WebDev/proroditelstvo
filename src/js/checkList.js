
import Swiper from 'swiper';

export default function() {
    const checkListSliders = Array.from(document.querySelectorAll('.js-check-list-slider'));

    checkListSliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        
        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            spaceBetween: 24,
            navigation: {
                nextEl: element.querySelector('.check-list__slider-arrow--next'),
                prevEl: element.querySelector('.check-list__slider-arrow--prev')
            },

            breakpoints: {
               
                569: {
                    slidesPerView: 3,
                    spaceBetween: 24
                },
                
                768: {
                    slidesPerView: 4,
                    spaceBetween: 24
                },
               
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 48
                }
            }
        })
    })
}