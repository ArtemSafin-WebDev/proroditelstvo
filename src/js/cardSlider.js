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

    // Mobile slider

    const mobileCardSliderElements = Array.from(document.querySelectorAll('.js-mobile-card-slider'));

    mobileCardSliderElements.forEach(element => {
        const slides = Array.from(element.querySelectorAll('.card-slider__mobile-slider-slide'));

        const slidesCount = slides.length;

        let activeSlideIndex = 0;
        let sliderAnimating = false;
        const prev = element.querySelector('.card-slider__mobile-arrow--prev');
        const next = element.querySelector('.card-slider__mobile-arrow--next');

        let state = {};

        function setActiveSlide(index) {
            if (slidesCount <= 1) return;

            let currentSlide = slides[index];
            let prevSlide = null;
            let nextSlide = null;

            if (slidesCount < 3) {
                nextSlide = slides[index - 1] ? slides[index - 1] : slides[index + 1];
            } else {
                if (index < slidesCount - 1) {
                    nextSlide = slides[index + 1];
                } else {
                    nextSlide = slides[0];
                }

                if (index > 0) {
                    prevSlide = slides[index - 1];
                } else {
                    prevSlide = slides[slidesCount - 1];
                }
            }

            state = {
                currentSlide,
                prevSlide,
                nextSlide
            };

            slides.forEach(slide => {
                slide.style.transform = '';
                slide.style.zIndex = '';
                if (slide === currentSlide) {
                    slide.style.transform = '';
                    slide.style.zIndex = 10;
                } else if (slide === nextSlide) {
                    slide.style.transform = `translateY(3rem) scale(.9)`;
                    slide.style.zIndex = 8;
                } else {
                    slide.style.transform = `translateY(6rem) scale(.8)`;
                    slide.style.zIndex = 4;
                }
            });

            activeSlideIndex = index;

            console.log(state);
        }

        setActiveSlide(activeSlideIndex);

        function nextSlide() {
            if (sliderAnimating) return;
            const activeSlide = slides[activeSlideIndex];

            const animationEndHandler = () => {
                activeSlide.classList.remove('swipe-left');
                sliderAnimating = false;
                activeSlide.removeEventListener('animationend', animationEndHandler);

                if (activeSlideIndex < slidesCount - 1) {
                    setActiveSlide(activeSlideIndex + 1);
                } else {
                    setActiveSlide(0);
                }
            };

            activeSlide.addEventListener('animationend', animationEndHandler);

            activeSlide.classList.add('swipe-left');
            sliderAnimating = true;
        }

        function prevSlide() {
            if (sliderAnimating) return;

            const activeSlide = slides[activeSlideIndex];

            const animationEndHandler = () => {
                activeSlide.classList.remove('swipe-right');
                sliderAnimating = false;
                activeSlide.removeEventListener('animationend', animationEndHandler);


                // Выглядит плохо

                // if (activeSlideIndex > 0) {
                //     setActiveSlide(activeSlideIndex - 1);
                // } else {
                //     setActiveSlide(slidesCount - 1);
                // }

                if (activeSlideIndex < slidesCount - 1) {
                    setActiveSlide(activeSlideIndex + 1);
                } else {
                    setActiveSlide(0);
                }
            };

            activeSlide.addEventListener('animationend', animationEndHandler);

            activeSlide.classList.add('swipe-right');
            sliderAnimating = true;
        }

        prev.addEventListener('click', event => {
            event.preventDefault();
            prevSlide();
        });
        next.addEventListener('click', event => {
            event.preventDefault();
            nextSlide();
        });
    });
}
