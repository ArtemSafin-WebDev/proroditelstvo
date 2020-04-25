export default function() {
    const showAllBtns = Array.from(document.querySelectorAll('.articles__load-more'))

    showAllBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();

            const storiesContainer = btn.closest('.all-stories__content');
            const articlesContainer = btn.closest('.articles__list-wrapper');
            const videosContainer = btn.closest('.all-videos__cards');


            if (storiesContainer) storiesContainer.classList.add('show-all');
            if (articlesContainer) articlesContainer.classList.add('show-all');
            if (videosContainer) videosContainer.classList.add('show-all');
        })
    })
}