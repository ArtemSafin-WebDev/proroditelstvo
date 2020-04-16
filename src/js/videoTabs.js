export default function() {
    const videoTabs = Array.from(document.querySelectorAll('.js-video-tabs'));

    videoTabs.forEach(element => {
        const items = Array.from(element.querySelectorAll('.videos__tab-item'));
        const nav = Array.from(element.querySelectorAll('.videos__tabs-nav-card'));

        function setActiveTab(btnIndex) {
            items.forEach(item => item.classList.remove('active'));
            nav.forEach(btn => btn.classList.remove('active'));

            items[btnIndex].classList.add('active');

            nav[btnIndex].classList.add('active');
        }

        nav.forEach((navBtn, btnIndex) => {
            navBtn.addEventListener('click', event => {
                event.preventDefault();
                setActiveTab(btnIndex);
            });
        });

        setActiveTab(0);
    });
}
