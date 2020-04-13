import Swiper from 'swiper';

export default function() {
    // Desktop card slider

    const desktopCardSliderElements = Array.from(document.querySelectorAll('.js-desktop-card-slider'));

    desktopCardSliderElements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 3,
            spaceBetween: 60,
            watchOverflow: true,
            navigation: {
                nextEl: element.querySelector('.card-slider__desktop-arrow--next'),
                prevEl: element.querySelector('.card-slider__desktop-arrow--prev')
            }
        });
    });
}
