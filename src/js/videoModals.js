export default function() {
    $("[data-fancybox='videogallery']").fancybox({
        hash: false,
        backFocus: false,
        mobile: {
            clickSlide: 'close',
            backFocus: false
        }
    });
}