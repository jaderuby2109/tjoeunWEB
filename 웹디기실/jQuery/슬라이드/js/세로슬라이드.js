$(function () {
    const speed = 1000 // 움직이는 시간
    const time = 3000 // 멈춰있는 시간

    const $slide = $('.slide');
    const $container = $('.slide-container');
    const size = $slide.height();
    const count = $slide.length;

    $container.height(size * count);

    setInterval(function () {
        $container.animate({
            top: -size
        }, speed, function () {
            $container.css('top', 0);
            $container.append($('.slide').first());
        })
    }, time);
})