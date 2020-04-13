import polyfills from './polyfills';
import detectTouch from './detectTouch';
import cardSlider from './cardSlider';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();

    cardSlider();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
