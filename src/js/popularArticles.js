import Swiper from 'swiper';

export default function() {
    const popularArticlesSlider = Array.from(document.querySelectorAll('.js-popular-articles-slider'));

    popularArticlesSlider.forEach(slider => {
        const container = slider.querySelector('.swiper-container');

        let sliderInstance = null;

        const mql = window.matchMedia('(max-width: 568px)');

        function screenTest(mq) {
            if (mq.matches) {
                if (!sliderInstance) {
                    sliderInstance = new Swiper(container, {
                        slidesPerView: 1,
                        // spaceBetween: 20,
                        slidesPerColumn: 3
                    });
                }
            } else {
                if (sliderInstance) {
                    sliderInstance.destroy();
                    sliderInstance = null;
                }
            }
        }

        mql.addListener(screenTest);

        screenTest(mql);
    });
}
