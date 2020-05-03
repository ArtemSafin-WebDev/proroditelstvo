import Swiper from 'swiper';

export default function() {
    const booksSliders = Array.from(document.querySelectorAll('.js-books-slider'));

    booksSliders.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            spaceBetween: 18,
            navigation: {
                nextEl: element.querySelector('.free-books__slider-arrow--next'),
                prevEl: element.querySelector('.free-books__slider-arrow--prev')
            },

            breakpoints: {
               
                569: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                
                768: {
                    slidesPerView: 4,
                    spaceBetween: 60
                },
               
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 90
                }
            }
        });
    });
}
