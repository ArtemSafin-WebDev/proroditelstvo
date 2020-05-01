export default function() {
    $("[data-fancybox='mediagallery']").fancybox({
        hash: false,
        backFocus: false,
        mobile: {
            clickSlide: 'close',
            backFocus: false
        },
        afterLoad: function(instance, current) {
            var pixelRatio = window.devicePixelRatio || 1;

            if (pixelRatio > 1.5) {
                current.width = current.width / pixelRatio;
                current.height = current.height / pixelRatio;
            }
        }
    });
}
