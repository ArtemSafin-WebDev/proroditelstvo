import polyfills from './polyfills';
import detectTouch from './detectTouch';
import cardSlider from './cardSlider';
import popularArticlesSlider from './popularArticles';
import coursesSliders from './coursesSliders';
import videoTabs from './videoTabs';
import storiesSliders from './storiesSlider';
import burgerMenu from './burgerMenu';
import forms from './forms';
import showAll from './showAll';
import '@fancyapps/fancybox';
import videoModals from './videoModals';
import tabs from './tabs';
import allCoursesSliders from './allCoursesSliders';
import gallery from './gallery';
import booksSlider from './booksSlider';
import checkList from './checkList';
import marathonsSliders from './marathonsSlider';


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
    showAll();
    videoModals();
    tabs();
    allCoursesSliders();
    gallery();
    booksSlider();
    checkList();
    marathonsSliders();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
})
