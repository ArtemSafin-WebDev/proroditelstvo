import polyfills from './polyfills';
import detectTouch from './detectTouch';
import cardSlider from './cardSlider';
import popularArticlesSlider from './popularArticles';
import coursesSliders from './coursesSliders';


document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();

    cardSlider();

    popularArticlesSlider();
    coursesSliders();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
