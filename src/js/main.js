import polyfills from './polyfills';
import detectTouch from './detectTouch';
import cardSlider from './cardSlider';
import popularArticlesSlider from './popularArticles';
import coursesSliders from './coursesSliders';
import videoTabs from './videoTabs';
import storiesSliders from './storiesSlider';
import burgerMenu from './burgerMenu';
import forms from './forms';


document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    burgerMenu();
    cardSlider();
    popularArticlesSlider();
    coursesSliders();
    videoTabs();
    storiesSliders();
    forms();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
