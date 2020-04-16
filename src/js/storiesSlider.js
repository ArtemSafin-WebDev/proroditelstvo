import Swiper from 'swiper';

export default function() {
    const storiesSliders = Array.from(document.querySelectorAll('.js-stories-slider'));


    storiesSliders.forEach(slider => {
        const container = slider.querySelector('.swiper-container');

        let sliderInstance = null;

        const mql = window.matchMedia('(max-width: 568px)');

        function screenTest(mq) {
            if (mq.matches) {
                if (!sliderInstance) {
                    sliderInstance = new Swiper(container, {
                        slidesPerView: 'auto',
                        watchOverflow: true,
                        spaceBetween: 24
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
    })
}