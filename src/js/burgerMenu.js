import { lockScroll, unlockScroll } from './scrollBlocker';

export default function() {
    const burger = document.querySelector('.page-header__burger');

    const menuInnerWrapper = document.querySelector('.page-header__navigation-inner');
    let menuOpen = false;

    if (burger && menuInnerWrapper) {
        burger.addEventListener('click', event => {
            event.preventDefault();

            if (!menuOpen) {
                lockScroll(menuInnerWrapper);
                document.body.classList.add('menu-open');
                menuOpen = true;
            } else {
                unlockScroll();
                document.body.classList.remove('menu-open');
                menuOpen = false;
            }
        });
    }
}
