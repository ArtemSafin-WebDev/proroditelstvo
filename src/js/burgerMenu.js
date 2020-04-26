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

    const searchModalOpenBtns = Array.from(document.querySelectorAll('.js-search-modal-open'));
    const searchModalClose = document.querySelector('.js-search-modal-close');
    let searchModalOpen = false;
    const searchModal = document.querySelector('.page-header__search-modal');

    function handleSearchModal(event) {
        event.preventDefault();
        if (searchModalOpen) {
            searchModal.classList.remove('open');
            unlockScroll();
            searchModalOpen = false;
        } else {
            if (menuOpen) {
                unlockScroll();
                document.body.classList.remove('menu-open');
                menuOpen = false;
            }
            searchModal.classList.add('open');
            lockScroll(searchModal);
            searchModalOpen = true;
        }
    }

    if (!searchModal) return;
    if (searchModalClose) searchModalClose.addEventListener('click', handleSearchModal);
    searchModalOpenBtns.forEach(btn => btn.addEventListener('click', handleSearchModal));
}
