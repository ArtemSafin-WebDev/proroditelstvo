import Swiper from "swiper";

export default function() {
    const marathonsSliders = Array.from(document.querySelectorAll('.js-marathons-slider'));

    marathonsSliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 22,
            watchOverflow: true,
            navigation: {
                nextEl: element.querySelector('.marathons__slider-arrow--next'),
                prevEl: element.querySelector('.marathons__slider-arrow--prev')
            },

            breakpoints: {
               
                569: {
                    slidesPerView: 2,
                    spaceBetween: 22
                },
                
                968: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
               
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 48
                }
            }
        });
    })
}