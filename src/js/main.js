import polyfills from './polyfills';
import detectTouch from './detectTouch';
import cardSlider from './cardSlider';
import popularArticlesSlider from './popularArticles';


document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();

    cardSlider();

    popularArticlesSlider();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
